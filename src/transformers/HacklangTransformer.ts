import Transformer from './Transformer';
import type TokenProcessor from "../TokenProcessor";

/**
 * HacklangTransformer
 */
export default class HacklangTransformer extends Transformer {
	constructor(readonly tokens: TokenProcessor) {
		super();
	}

	process(): boolean {
		const code = this.tokens.currentTokenCode()

		if (code === "rice") {
			this.tokens.replaceToken("var")
			return true
		} else if (code === "yuto") {
			this.tokens.replaceToken("const")
			return true
		}
		/* aditya -> class is at src/parser/traverser/statement.ts (parseClass) */
		// else if (code === "aditya") {
		// 	this.tokens.replaceToken("class")
		// 	return true
		// }
		else if (code === "carrot") {
			this.tokens.replaceToken("throw")
			return true
		}

		return false
	}
}
