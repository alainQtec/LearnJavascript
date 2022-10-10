# TODO: Make this script Cross-Platform
# for now it's only designed  to work on windows.
function Resolve-EADDRINUSE {
    [CmdletBinding()]
    param (
        # Port Number.
        [Parameter(Mandatory = $true)][string]$Port
    )

    begin {
        $ProcList = NETSTAT.EXE -ano | findstr :$Port
    }

    process {
        taskkill /PID 4744 /F
    }

    end {

    }
}