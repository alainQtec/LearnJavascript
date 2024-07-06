enum WebFramework {
    NextJs
    None # frameworkless ie: https://www.sitepoint.com/build-frameworkless-web-app-modern-javascript-web-components/
}
class JsWebApp {
    [string]$Name
    [WebFramework]$framework

    JsWebApp() {}
    JsWebApp([string]$Name, [WebFramework]$framework) {
        $app = [JsWebApp]::Create($Name, $framework)
        $this.Name = $app.Name
        $this.framework = $app.framework
    }
    static [JsWebApp] Create([string]$Name, [WebFramework]$framework) {
        $def_data = [PSCustomObject]@{
            Names = [PSCustomObject]@{
                Wf_None = 'framework-less-web-components'
            }
        }
        $appName = $(if ([string]::IsNullOrWhiteSpace($Name)) { $def_data.Names."Wf_$framework" }else { $Name })
        if ($framework.Equals([WebFramework]::None)) {
            Write-Verbose "Getting Started ..."
            # Assuming you have the latest Node LTS installed on the machine: https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/
            New-Item -Path $appName
            Set-Location $appName
            &npm init
            Invoke-Command npm -ArgumentList 'i http-server bootstrap@next --save-exact'
            # Write-Verbose "Integrating Web Components .."
            # Write-Verbose "Validating Forms ..."
            # Write-Verbose "Add Observables ..."
            # Write-Verbose "Add Observed Attributes .."
            # Write-Verbose "Fix Gotchas"
            # Write-Verbose "Creating Final demo ..."
        } else {
            Throw "Framework not supported yet."
        }
        return ''
    }
}
function New-WebApp {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $false)]
        [AllowEmptyString()]
        [string]$Name,

        [Parameter(Mandatory = $false)]
        [WebFramework]$framework = "None"
    )

    begin {

    }

    process {



    }

    end {

    }
}
