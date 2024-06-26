import { css } from "lit"

/*
 * This gets into the published component
 */

export const messageBundleStyling = css`
	div {
		box-sizing: border-box;
		font-size: 13px;
	}
	.header {
		font-weight: 600;
		background-color: var(--sl-color-neutral-300);
		padding: 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		min-height: 44px;
	}
	.messages-container {
		width: 100%;
		margin-bottom: 16px;
	}
	.message {
		position: relative;
		display: flex;
		min-height: 44px;
		width: 100%;
		border: 1px solid var(--sl-color-neutral-300);
		border-top: none;
	}
	.message:first-child {
		border-top: 1px solid var(--sl-color-neutral-300);
	}
	.language-container {
		width: 80px;
		min-height: 44px;
		padding: 12px;
		background-color: var(--sl-color-neutral-100);
		border-right: 1px solid var(--sl-color-neutral-300);
	}
	.message-body {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.message-header {
		width: 100%;
		min-height: 44px;
		display: flex;
		justify-content: space-between;
		background-color: var(--sl-color-neutral-100);
		border-bottom: 1px solid var(--sl-color-neutral-300);
	}
	.no-bottom-border {
		border-bottom: none;
	}
	.selector-container {
		min-height: 44px;
		display: flex;
	}
	.selector {
		height: 44px;
		width: 120px;
		display: flex;
		align-items: center;
		padding: 12px;
		border-right: 1px solid var(--sl-color-neutral-300);
		font-weight: 600;
	}
	.add-selector-container {
		height: 44px;
		width: 44px;
		display: flex;
		align-items: center;
		padding: 12px;
	}
	.add-selector {
		height: 28px;
		width: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--sl-color-neutral-600);
		border-radius: 4px;
		border: 1px solid var(--sl-color-neutral-300);
		background-color: var(--sl-color-neutral-0);
		cursor: pointer;
		font-size: 13px;
	}
	.add-selector:hover {
		color: var(--sl-color-neutral-900);
		background-color: var(--sl-color-neutral-200);
		border: 1px solid var(--sl-color-neutral-400);
	}
	.message-actions {
		height: 44px;
		display: flex;
		align-items: center;
		padding: 12px;
	}
	.variants-container {
		width: 100%;
		height: 44px;
		display: flex;
		flex-direction: column;
		height: auto;
	}
	.new-variant {
		box-sizing: border-box;
		min-height: 44px;
		width: 100%;
		display: flex;
		gap: 4px;
		align-items: center;
		padding-left: 12px;
		margin: 0;
		background-color: var(--sl-color-neutral-0);
		color: var(--sl-color-neutral-400);
		border-top: 1px solid var(--sl-color-neutral-300);
		cursor: pointer;
		transitions: all 0.5s;
	}
	.new-variant:hover {
		background-color: var(--sl-color-neutral-50);
		color: var(--sl-color-neutral-700);
	}
`
