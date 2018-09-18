<template>
<div>
    <h1>Friends</h1>
    <!-- props未設定の場合 -->
    <!-- {{$route.params.id}}
    {{$route.params.age}}
    {{$route.params.weight}} -->

    {{id}}
    {{age}}
    {{weight}}
</div>
</template>

<script>
export default {
   props: [
       'id',
       'age',
       'weight'
   ] 
}
</script>


