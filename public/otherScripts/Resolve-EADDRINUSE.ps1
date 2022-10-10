# TODO: Make this script Cross-Platform
# for now it's only designed  to work on windows.
function Resolve-EADDRINUSE {
    [CmdletBinding()]
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
        $processList.ForEach({
                $Array = $_.split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
                $Array
                # $noAct = ![string]::isnullorWhiteSpace($Array[4])
                # $_PID = if ($noAct) { $Array[4] }else { $Array[3] }
                # $_ACT = if ($noAct) { [string]::Empty }else { $Array[3] }
                # [PSCustomObject]@{
                #     IntIP = $Array[1]
                #     ExtIP = $Array[2]
                #     NetType = $Array[0]
                #     Activity = $_ACT
                #     ProcID = $_PID
                # }
            }
        )
        Write-Verbose "Found $($processList.count) running Processes that are still using the EADDR."
        taskkill /PID 4744 /F
    }

    end {

    }
}