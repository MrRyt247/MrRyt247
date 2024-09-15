# oh-my-posh init pwsh --config 'C:\Users\{user}\AppData\Local\Programs\oh-my-posh\themes\clean-detailed.omp.json' | Invoke-Expression

oh-my-posh init pwsh --config "C:\Users\{user}\AppData\Local\Programs\oh-my-posh\themes\mrryt.omp.json" | Invoke-Expression

Import-Module -Name Terminal-Icons

if ($host.Name -eq 'ConsoleHost')
{
    Import-Module PSReadLine
}
