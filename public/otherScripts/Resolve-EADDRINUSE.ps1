<#
.SYNOPSIS
    # for now it's only designed  to work on windows.
.DESCRIPTION
    Long description
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    # TODO: Make this script Cross-Platform
#>
    [CmdletBinding(SupportsShouldProcess)]
    [Alias('FixEADR')]
    param (
        # Port Number.
        [Parameter(Mandatory = $true)][string]$Port
    )

    begin {
        $script:getProcList = {
            param($PortNumber)
            return (NETSTAT.EXE -ano | findstr :$PortNumber)
        }
    }

    process {
        # $tmp = [IO.Path]::GetTempFileName(); $getProcList.Invoke($Port) | Out-File $tmp
        $processList = $getProcList.Invoke($Port).split("\n")
        $processList = $processList.ForEach({
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
        )
        Write-Verbose "Found $($processList.count) running Processes that are still using the EADDR."
        $Pids = $processList.ProcId | Sort-Object -Unique | Where-Object {$_ -as 'int'}
        $Pids.ForEach({
                if ($PSCmdlet.ShouldProcess("PID:$_", "taskkill")) {
                    taskkill /PID $_ /F
                }
            }
        )
    }

    end {}