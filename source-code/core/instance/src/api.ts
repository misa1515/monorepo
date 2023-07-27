import type { InlangConfig } from "@inlang/config"
import type { InlangEnvironment } from "@inlang/environment"
import type { LintException, LintReport } from "@inlang/lint-api"
import type { MessageQueryApi } from "@inlang/messages"

export type InlangInstance = {
	config: {
		get: () => InlangConfig
		set: (config: InlangConfig) => void
	}
	env: InlangEnvironment
	query: {
		messages: MessageQueryApi
	}
	lint: {
		// for now, only simply array that can be improved in the future
		// see https://github.com/inlang/inlang/issues/1098
		reports: () => LintReport[]
		exceptions: () => LintException[]
	}
}
