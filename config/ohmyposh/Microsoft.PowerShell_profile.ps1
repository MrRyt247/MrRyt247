oh-my-posh init pwsh --config 'C:\Users\flaviO\AppData\Local\Programs\oh-my-posh\themes\clean-detailed.omp.json' | Invoke-Expression

Import-Module -Name Terminal-Icons

if ($host.Name -eq 'ConsoleHost')
{
    Import-Module PSReadLine
}
# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.
$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"
if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}
