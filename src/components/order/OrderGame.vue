<template>
    <div>
        <input type="number" v-model="my_number" />
        <button class="btn" @click="fnResetTiles">reset</button>
        <order-card v-for="(i, key) in tile_cnt" :key="key" :change_color="change_color[key]" @click="fnAnswerSubmit(key)"></order-card>
    </div>
</template>

<script>

import OrderCard from './OrderCard.vue'
export default {
  components: { TileComp },
  data() {
    return {
        my_number : 5,
        tile_cnt : 9,
        answer_color :[],
        change_color :[],
        my_answer:[],
    }
  },
  methods: {
    fnResetTiles(){
        for(let i = 0 ; i < this.tile_cnt; i++){
            this.change_color[i] = 0;
        }
        for(let i = 0; i < this.my_number; i++){
            this.answer_color[i] = 0;
        }

        
        for( let i = 0 ; i < this.my_number ; i++){
            let ran_num = Math.floor( Math.random()*this.tile_cnt);
            
            
            this.answer_color[i] = ran_num; 
            
            
        }
        let i = 0;
        const interverOut = setInterval(() => {
            
                
            if( i == this.my_number ){
                clearInterval(interverOut);
            }
            
            this.change_color[this.answer_color[i++]] = 1;
            
            const timeOut = setTimeout(()=>{
                this.change_color[this.answer_color[i-1]] = 0;
                clearTimeout(timeOut);
            }, 800) ;
            
        }, 1000);
    },
    fnAnswerSubmit(key){
        this.my_answer.push(key);
        if( this.answer_color.toString() == this.my_answer.toString()){
            this.my_answer = [];
            alert('성공')
        }else if( this.my_answer.length == this.my_number){
            this.my_answer = [];
            alert('실패')
        }
    }
  },
    name:'SequencePage'
    
}
</script>
<style>
.btn {
    display:block;
}
</style>