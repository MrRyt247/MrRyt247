import VscodeIconsFileTypeHtml from '~icons/vscode-icons/file-type-html';
import VscodeIconsFileTypeCss from '~icons/vscode-icons/file-type-css';
import VscodeIconsFileTypeJsOfficial from '~icons/vscode-icons/file-type-js-official';
import VscodeIconsFileTypeNode from '~icons/vscode-icons/file-type-node';
import DeviconExpress from '~icons/devicon/express';
import VscodeIconsFileTypeAngular from '~icons/vscode-icons/file-type-angular';
import VscodeIconsFileTypeTypescriptOfficial from '~icons/vscode-icons/file-type-typescript-official';
import VscodeIconsFileTypeSvelte from '~icons/vscode-icons/file-type-svelte';
import DeviconJquery from '~icons/devicon/jquery';
import DeviconPostgresql from '~icons/devicon/postgresql';
import DeviconMongodb from '~icons/devicon/mongodb';
import VscodeIconsFileTypeC from '~icons/vscode-icons/file-type-c';
import VscodeIconsFileTypeCpp3 from '~icons/vscode-icons/file-type-cpp3';
import VscodeIconsFileTypePython from '~icons/vscode-icons/file-type-python';
import DeviconBash from '~icons/devicon/bash';
import VscodeIconsFileTypePowershell from '~icons/vscode-icons/file-type-powershell';
import DeviconNextjs from '~icons/devicon/nextjs';
import VscodeIconsFileTypeHardhat from '~icons/vscode-icons/file-type-hardhat';
import VscodeIconsFileTypeSolidity from '~icons/vscode-icons/file-type-solidity';

export interface Technology {
    name: string;
	icon: typeof VscodeIconsFileTypeHtml;
}

export const technologies: Technology[] = [
	{ name: 'HTML', icon: VscodeIconsFileTypeHtml },
	{ name: 'CSS', icon: VscodeIconsFileTypeCss },
	{ name: 'JS', icon: VscodeIconsFileTypeJsOfficial },
	{ name: 'jQuery', icon: DeviconJquery },
	{ name: 'NodeJs', icon: VscodeIconsFileTypeNode },
	{ name: 'Express', icon: DeviconExpress },
	{ name: 'TS', icon: VscodeIconsFileTypeTypescriptOfficial },
	{ name: 'Angular', icon: VscodeIconsFileTypeAngular },
	{ name: 'Svelte', icon: VscodeIconsFileTypeSvelte },
	{ name: 'PostgreSQL', icon: DeviconPostgresql },
	{ name: 'MongoDB', icon: DeviconMongodb },
	{ name: 'C', icon: VscodeIconsFileTypeC },
	{ name: 'C++', icon: VscodeIconsFileTypeCpp3 },
	{ name: 'Python', icon: VscodeIconsFileTypePython },
	{ name: 'Bash', icon: DeviconBash },
	{ name: 'Powershell', icon: VscodeIconsFileTypePowershell },
	{ name: 'Nextjs', icon: DeviconNextjs },
	{ name: 'Hardhat', icon: VscodeIconsFileTypeHardhat },
	{ name: 'Solidity', icon: VscodeIconsFileTypeSolidity }
];

// Search site; Unplugin Icons components
//https://icones.js.org/collection/all