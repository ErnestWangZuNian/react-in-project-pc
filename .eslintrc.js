module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        // 禁止解构中出现空 {} 或 []
        'no-empty-pattern': 'error',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
    }
}