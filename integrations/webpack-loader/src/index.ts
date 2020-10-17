import {getOptions, getRemainingRequest} from "loader-utils";
import {Options, transform} from "../../../";

function loader(code: string): string {
  const webpackRemainingChain = getRemainingRequest(this).split("!");
  const filePath = webpackRemainingChain[webpackRemainingChain.length - 1];
  const options: Options = getOptions(this) as Options;
  require('fs').writeFileSync('test', JSON.stringify(options))
  const result = transform(code, { filePath, ...options });
  // this.getLogger('hacklang').info(result)
  return result.code
}

export = loader;
