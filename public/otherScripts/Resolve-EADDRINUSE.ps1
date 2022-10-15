<#
.SYNOPSIS
    # for now it's only designed  to work on windows.
.DESCRIPTION
    Long description
.EXAMPLE
    PS C:\> Resolve-EADDRINUSE.ps1 3000
.INPUTS
    string[]
.OUTPUTS
    none
.NOTES
    # TODO: Make this script Cross-Platform
#>
[CmdletBinding(SupportsShouldProcess = $true)]
[Alias('FixEADR')]
param (
    # Port Number.
    [Parameter(Mandatory = $true, Position = 0)]
    [int]$Port
)

process {
    $tmp = [IO.Path]::GetTempFileName(); $(NETSTAT.EXE -ano | findstr :$Port) | Out-File $tmp;
    $processList = Get-Content $tmp
    if ($processList.Count -gt 0) {
        $Pids = $processList.ForEach({
                $Array = $_.split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
                $noAct = $Array[4] -eq " ";
                $_PID = if ($noAct) { $Array[4] }else {
                    if ($Array[3] -as 'int') {
                        $Array[3]
                    }else {
                        ' '
                    }
                }
                $_ACT = if ([string]::IsNullOrWhiteSpace($_PID) -or $_PID -ne $Array[3]) { [string]::Empty; $_PID = $Array[3] }else { [string]::Empty }
                [PSCustomObject]@{
                    # IntIP = $Array[1]
                    # ExtIP = $Array[2]
                    # NetType = $Array[0]
                    Activity = $_ACT
                    ProcID = $_PID
                }
            }
        ).ProcId | Sort-Object -Unique | Where-Object {$_ -as 'int' -and $_ -ne $PID}
        Write-Verbose "Found $($Pids.count) PIDs that are still using the EADDR."
        $Pids.ForEach({
                # Start-Process  -FilePath $([IO.Path]::Combine([Environment]::GetFolderPath('System'),'taskkill.exe')) -ArgumentList "/PID $_ /F" -Verb runas
                if ($PSCmdlet.ShouldProcess("Stop-Process -Id $_ -Force",'', '')) {
                    Stop-Process -Id $_ -Force
                }
            }
        )
    }else {
        Write-Verbose "Found no running Processes that are still using the EADDR."
    }
    Remove-Item $tmp | Out-Null
}

end {}