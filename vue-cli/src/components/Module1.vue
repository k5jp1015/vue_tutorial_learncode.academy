<!-- 
vueは各コンポーネントごとにHTML,script(javascript),css(style)をそれぞれ設定して、
各コンポーネント間でスコープを担保するっぽい
※別途コンポーネント間の変数の共有は必要なケースがあるとは思われる
 -->

<template>
    <h1>Module1</h1>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h1{
    color:blue;
}
</style>
