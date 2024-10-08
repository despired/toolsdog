<template>
  <!-- <button @click="increment">点击了：{{ count }} 次</button> -->
  <div>{{ name }}</div>
  <button @click="changeName">修改仓库中的用户姓名</button>
  <li>十年后年龄:{{ userStore.afterAge }}</li> //28
</template>
<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const name = computed(() => userStore.userInfo.name)
const changeName = () => {
  // userStore.userInfo.name = '李四'  // 不要这种代码
  userStore.changeUserName('李四')
}
const count = ref(0)
const q = ref([5, 5, 1, 9, 9, 6, 4, 5, 8]);
const testNumber = ref([{ name: "123456" }])
const b = reactive(["tie", "mao", "csdn", "ren", "fu", "fei"]);
const increment = () => {
  count.value++
}
//只读的计算属性
const count1 = ref(1)
const plusOne = computed(() => count1.value + 1)
// console.log(plusOne.value);
//可写的计算属性
const count2 = ref(1)
const plueTwo = computed({
  get: () => count2.value + 1,
  set: (val) => {
    count2.value = val - 1
  }
})
plueTwo.value = 5
console.log(count2.value);
const changevalue = () => {
  q.value.push.apply(q.value, b.vale)
}
onMounted(() => {
  // console.log(`计数器初始值为 ${count.value}。`)
  // // changevalue()
  // console.log(b);
})
</script>