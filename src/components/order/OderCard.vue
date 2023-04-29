<template>
  <div  class="seqBox" :class="change_color==1 ? 'red' :''">
    {{ change_color }}
  </div>
</template>

<script>
export default {
    props :{
        change_color : Number,
    }
}
</script>

<style>
.seqBox{
    display:inline-block;
    width:33%;
    height:200px;
    border : 1px solid black;
}
.red{
    background-color: red;
}
</style>