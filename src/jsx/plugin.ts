import { PluginObj } from "@babel/core"
import * as t from "@babel/types"

const plugin = (): PluginObj => ({
  name: "jsx-reags",
  visitor: {
    JSXElement(path) {
      path
    }
  }
})