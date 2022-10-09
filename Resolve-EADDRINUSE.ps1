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