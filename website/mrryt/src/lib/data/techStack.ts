import VscodeIconsFileTypeHtml from '~icons/vscode-icons/file-type-html';
import VscodeIconsFileTypeCss from '~icons/vscode-icons/file-type-css';
import VscodeIconsFileTypeJsOfficial from '~icons/vscode-icons/file-type-js-official';
import VscodeIconsFileTypeNode from '~icons/vscode-icons/file-type-node';
import DeviconExpress from '~icons/devicon/express';
import VscodeIconsFileTypeAngular from '~icons/vscode-icons/file-type-angular';
import VscodeIconsFileTypeTypescriptOfficial from '~icons/vscode-icons/file-type-typescript-official';
import VscodeIconsFileTypeSvelte from '~icons/vscode-icons/file-type-svelte';
import DeviconJquery from '~icons/devicon/jquery';


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
	{ name: 'Svelte', icon: VscodeIconsFileTypeSvelte }
];

// Search site; Unplugin Icons components
//https://icones.js.org/collection/all