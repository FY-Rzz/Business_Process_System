<template>
  <div>
    <!-- 面包屑导航栏 -->

    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="450px" style="background-color: rgb(238, 241, 246)">
          <!-- 左侧任务部署 -->
        <project-setting></project-setting>
      </el-aside>
      <!-- 右侧可视化任务图 -->
      <project-graph></project-graph>
    </el-container>
  </div>
</template>

<script>
  import ProjectGraph from './ProjectGraph.vue'
  import ProjectSetting from './ProjectSetting.vue'
  import { procreateSetUser } from '@/api/proCreateApi';
  import {store} from '../../store/index';
  export default {
    store : store,
    name : 'proj-create',
    components : {
      ProjectSetting,
      ProjectGraph,
    },
    data(){
      return{
        stage:[],
      }
    },
    mounted(){
      this.setUser();
    },
    methods: {
      // 从后端获取项目人员 mounted函数中启动
      setUser()
      {
        let users = []
        // console.log("初始化用户列表")
        let params = {
                userId: 100
            }
        procreateSetUser(params).then(res=>{
          console.log("api 打印用户",res.data)
          for (var i of res.data.data.user)
          {
              i.choice = "NULL"
              users.push(i)
          }
          this.$store.commit('proCreate/SETUSER',users);

        }).catch(function (error) {
            console.log(error);
        });
      },
      usermsg(){
        this.$message({
          type : "success",
          message : "查看个人信息"
        })
      },
    }
  }
</script>


<style scoped>
  .el-header {
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .sticky {
  position: fixed;
  width: 100%;
  
  top: 0;
  z-index: 10;


}

</style>
