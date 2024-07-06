<#
.SYNOPSIS
    Run tasks
    .\build.ps1 <task-name>.
.EXAMPLE
    .\build.ps1 up
    .\build.ps1 run
    .\build.ps1 ent-new MyEntity
#>


# Function to determine if docker-compose or docker compose is installed
function Get-DockerComposeCommand {
    $dockerCompose = Get-Command "docker-compose" -ErrorAction SilentlyContinue
    if ($dockerCompose) {
        return "docker-compose"
    }
    $dockerCompose = Get-Command "docker" -ErrorAction SilentlyContinue
    if ($dockerCompose) {
        return "docker compose"
    }
    throw "Docker Compose not found"
}

$DCO_BIN = Get-DockerComposeCommand

# Helper function to run docker exec commands
function Invoke-DockerExec {
    param($container, $command)
    docker exec -it $container $command
}

# Tasks
function Invoke-Db { Invoke-DockerExec "pagoda_db" "psql postgresql://admin:admin@localhost:5432/app" }
function Invoke-DbTest { Invoke-DockerExec "pagoda_db" "psql postgresql://admin:admin@localhost:5432/app_test" }
function Invoke-Cache { Invoke-DockerExec "pagoda_cache" "redis-cli" }
function Invoke-CacheClear { Invoke-DockerExec "pagoda_cache" "redis-cli flushall" }
function Invoke-CacheTest { Invoke-DockerExec "pagoda_cache" "redis-cli -n 1" }

function Invoke-EntInstall { go get -d entgo.io/ent/cmd/ent }
function Invoke-EntGen { go generate ./ent }
function Invoke-EntNew { param($name) go run entgo.io/ent/cmd/ent new $name }

function Invoke-Up {
    & $DCO_BIN up -d
    Start-Sleep -Seconds 3
}

function Invoke-Stop { & $DCO_BIN stop }
function Invoke-Down { & $DCO_BIN down }

function Invoke-Reset {
    Invoke-Down
    Invoke-Up
}

function Invoke-Run {
    Clear-Host
    go run cmd/web/main.go
}

function Invoke-Test { go test -count=1 -p 1 ./... }

function Invoke-Worker {
    Clear-Host
    go run cmd/worker/main.go
}

function Invoke-CheckUpdates {
    $updates = go list -u -m -f '{{if not .Indirect}}{{.}}{{end}}' all | Select-String "\["
    if ($updates) {
        Write-Output $updates
    } else {
        Write-Output "No updates found."
    }
}

# Main script
param(
    [Parameter(Position = 0, Mandatory = $true)]
    [string]$Task,

    [Parameter(ValueFromRemainingArguments = $true)]
    $RestArgs
)

switch ($Task) {
    "db" { Invoke-Db }
    "db-test" { Invoke-DbTest }
    "cache" { Invoke-Cache }
    "cache-clear" { Invoke-CacheClear }
    "cache-test" { Invoke-CacheTest }
    "ent-install" { Invoke-EntInstall }
    "ent-gen" { Invoke-EntGen }
    "ent-new" { Invoke-EntNew $RestArgs }
    "up" { Invoke-Up }
    "stop" { Invoke-Stop }
    "down" { Invoke-Down }
    "reset" { Invoke-Reset }
    "run" { Invoke-Run }
    "test" { Invoke-Test }
    "worker" { Invoke-Worker }
    "check-updates" { Invoke-CheckUpdates }
    default { Write-Error "Unknown task: $Task" }
}