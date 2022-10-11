const _moduleName = 'main.js'
const _insertCode = 'console.log(import.meta.url)\n'

export default function() {
	return {
		name: 'vitePluginInsert',
		apply: 'serve',
		transform(code, id) {
			if(!id.includes(_moduleName)) return code
			return _insertCode + code
		}
	}
}