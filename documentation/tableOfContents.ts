import { RequiredFrontmatter } from "@inlang/website/markdown"

/**
 * The frontmatter schema used to validate the markdown files in this directory.
 */
export const FrontmatterSchema = RequiredFrontmatter

/**
 * The table of contents split by categories.
 */
export const tableOfContents: Record<string, string[]> = {
	Overview: ["./getting-started/introduction.md", "./getting-started/quick-start.md"],
	Apps: ["./apps/editor.md", "./apps/ide-extension.md", "../source-code/cli/README.md"],
	Plugins: ["./plugins/registry.md", "./plugins/custom-plugins.md"],
	SDK: [
		"./sdk/general.md",
		"./sdk/usage.md",
		"./sdk/configuration.md",
		"./sdk/sveltekit/overview.md",
		"./sdk/sveltekit/advanced.md",
	],
	Guide: ["./badge.md", "./build-on-inlang.md"],
	Core: ["./ast.md", "./query.md"],
	Community: ["../CONTRIBUTING.md", "./code-organization.md"],
}
