<template>
    <div class="viewOfPersonalData">
<!--      头像和消息通知区域-->
        <div class="informationArea">
<!--            头像区-->
            <div class="headAreaOfUser">
                <div style="height:50px;width: 50px;border-radius: 10px;overflow: hidden">
                    <el-upload
                            action="http://localhost:9090/file/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            class="avatar-uploader"
                    >
                        <img v-if="user.adurl" :src="user.adurl" style="width: 100%" class="avatar">
                        <img v-if="!user.adurl"  src="../assets/images/touxiang.png" style="width: 100%;height: 100%">
                    </el-upload>
<!--                    <img  src="../assets/images/touxiang.png">-->
                </div>

                <el-dropdown>
                <span style="margin-left: 10px;font-size: 14px;color: black;padding-left: 10px" class="el-dropdown-link">
                {{user.nickname}}<i class="el-icon-arrow-down el-icon--right"></i>
                 </span>
                    <el-dropdown-menu slot="dropdown" class="liList">
                        <el-dropdown-item >
                            <span style="width: 100%;height: 100%" @click="closePersonalDataArea">个人信息</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <span  style="width: 100%;height: 100%" @click="closeWeatherArea">天气显示</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <span style="width: 100%;height: 100%" @click="closenoticeArea">消息通知</span>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <span  style="width: 100%;height: 100%" @click="closedealtArea">退出登录</span>
                        </el-dropdown-item>
                         
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
           <!-- 图标区-->
            <div class="IconArea">
                <i style="position: relative ;display: block;width: 30px;height: 30px;border-radius: 15px;background-color:#FFFFFF;text-align: center;
line-height: 30px" class="el-icon-message-solid">
                    <span v-if="numberOfRequest>0&&numberOfRequest<99" style="position: absolute;right: -5px;top: -5px;font-size: 3px;color: white;background-color: red;width: 16px;height: 16px;line-height: 16px;text-align: center;border-radius: 8px">{{numberOfRequest}}</span>
                    <span v-else-if="numberOfRequest>=99"  style="position: absolute;right: -5px;top: -5px;font-size: 3px;color: white;background-color: red;width: 16px;height: 16px;line-height: 16px;text-align: center;border-radius: 8px">99...</span>
                </i>
              
            </div>
        </div>


        <div class="mainBodyOfPersonalCenter">

            <transition-group name="list-complete" tag="p" appear>

<!--                天气区域-->

                <div v-show="flagOfWeather" class="weatherArea" :key="1">
                    <i style="position: absolute; right: 15px;top: 10px;font-size: 18px;font-weight: bold;z-index:5" class="el-icon-close close" @click="closeWeatherArea"></i>
<!--每日一言-->
                    <div style="text-align: center; padding: 0px 15px; font-size: 6px;font-weight: bold; flex: 2;color: #E7EAED;width: 100%;display: flex;justify-content: center;align-items: center;margin-top: 15px">
                        {{sentence}}
                    </div>
<!--                    天气-->
                    <div style="gap: 15px;color:#E7EAED;font-weight: bold ;flex:3;display: flex;justify-content: center;align-items: center">
                        <div style="height: 100%;">
                            天气
                            <div style="text-align:center">
                                {{weatherObj.text}}
                            </div>
                        </div>
                        <div style="height: 100%;">
                            温度
                            <div style="text-align:  center">
                                {{weatherObj.temp}}
                            </div>
                        </div>
                        <div style="height: 100%;">
                            体感温度
                            <div style="text-align:  center">
                                {{weatherObj.feelsLike}}
                            </div>
                        </div>
                        <div style="height: 100%;">
                            风速
                            <div style="text-align:  center">
                                {{weatherObj.windSpeed}}
                            </div>
                        </div>
                    </div>

                </div>
                <!--        个人信息区域-->
            <div v-show="flagOfPersonalData" class="personalDataArea" :key="2">
                <i style="position: absolute; right: 15px;top: 10px;font-size: 18px;font-weight: bolder;z-index:5 " class="el-icon-close close" @click="closePersonalDataArea"></i>
<!--                表头区-->
                <div class="headOfPersonData">
                    <span style="flex: 3">我的名片</span>
                    <span  style="flex: 1">
                        <el-button v-show="flagOfChangeUserData" type="primary" round style="margin-right: 20px;background-color: rgba(255,255,255,0.1);color: #589D95;font-weight: bold;border: 1px solid #257B5E;height: 25px" @click="flagOfChangeUserData=!flagOfChangeUserData">保存</el-button>
                    </span>
                </div>
<!--                    个人信息区主题-->
                <div class="mainBodyOfPersonalData">
<!--                    默认信息展示-->
                    <div v-show="!flagOfChangeUserData" class="defaultInformation" @click="flagOfChangeUserData=!flagOfChangeUserData">
                        <!--                        身份ID-->
                        <div>
                            身份ID:
                            <span>{{user.id}}</span>
                        </div>
                        <!--                        姓名-->
                        <div>
                        用&nbsp;户&nbsp;&nbsp;名:
                            <span>{{user.name}}</span>
                        </div>
<!--                        性别-->
                        <div>
                        姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:
                            <span>{{user.nickname}}</span>
                        </div>
<!--                        身份-->
                        <div>
                        身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份:
                            <span>{{user.role}}</span>
                        </div>

                    </div>

<!--                    修改信息-->
                    <div v-show="flagOfChangeUserData" class="changeDataOfUser">
                        <!--                        姓名-->
                        <div>
                            姓&nbsp;&nbsp;&nbsp;&nbsp;名:
                            <el-input v-model=user.name placeholder="请输入内容" style="width: 140px"></el-input>
                        </div>
                        <!--                        性别-->
                        <div>
                            性&nbsp;&nbsp;&nbsp;&nbsp;别:
                            <el-input v-model=user.sex placeholder="请输入内容"  style="width: 140px;"></el-input>
                        </div>
                        <!--                        身份-->
                        <div>
                            身&nbsp;&nbsp;&nbsp;&nbsp;份:
                            <el-input v-model=user.role placeholder="请输入内容"  style="width: 140px"></el-input>
                        </div>
                        <!--                        身份ID-->
                        <div>
                            身份ID:
                            <el-input v-model=user.identity placeholder="请输入内容"  style="width: 140px"></el-input>
                        </div>
                    </div>
                </div>
            </div>

            <!--        代办区域-->
            <!-- <div v-show="flagOfdealtArea" class="dealtArea" :key="3">
                <i style="position: absolute; right: 15px;top: 10px;font-size: 18px;font-weight: bold;z-index:5" class="el-icon-close close" @click="closedealtArea"></i>
            </div> -->

            <!--      消息通知-->
            <div v-show="flagOfnotice" class="noticeArea" :key="4">
                <i style="position: absolute; right: 15px;top: 10px;font-size: 18px;font-weight: bold;z-index:5" class="el-icon-close close" @click="closenoticeArea"></i>
<!--            消息通知表头-->
              <span style="flex: 1;display: flex;align-items: center;color: #333;padding-left: 15px;font-weight: bolder;font-size: 16px">消息通知</span>
<!--                没有申请的时候的表头-->
                <div v-show="this.numberOfRequest===0" style="flex: 3;display: flex;justify-content: center;align-items: center">
                    <el-empty style="width: 100px;height: 100px;"
                              description="暂无消息"
                              :image-size=100
                    ></el-empty>
                </div>
<!--                有申请时候的表头-->
                <div v-show="!(this.numberOfRequest===0)" style="flex: 3;display: flex;flex-direction: column;align-items: normal;margin-top: 0px;">
                        <div v-for="item in inforOfRequest" :key="item.id" style="display: flex;padding: 0 15px;height: 50px;width: 100%;line-height: 50px;align-items: center;text-overflow: ellipsis ">
                              <i class="el-icon-chat-round" style="margin-right:8px;font-size: 15px;font-weight: bolder"></i>
                            <span style="color: #2b542c;font-weight: bolder">用户 {{item.name}} 申请注册！</span>
                            <el-link type="primary" :underline="false" style="font-size: 12px" @click="informationReview(item)">详情</el-link>
                        </div>
                </div>
            </div>
            </transition-group>
        </div>

<!--        申请的详细信息-->
        <el-dialog
                title="用户信息"
                :visible.sync="dialogVisible"
                width="400px"
                :before-close="handleClose">
                <el-form :model="form">
                    <el-form-item label="用户名" label-width="100px" >
                        <el-input v-model="form.name" :disabled="true" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="真实姓名" label-width="100px">
                        <el-input v-model="form.nickname" autocomplete="off"  maxlength="5"
                                  show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="用户身份" label-width="100px">
                        <el-select v-model="form.role" placeholder="请选择用户身份">
                            <el-option label="组员" value="组员"></el-option>
                            <el-option label="管理员" value="管理员"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item  label-width="100px">
                        <span style="color: red">请管理员认真核对用户信息</span>
                    </el-form-item>
                </el-form>
            <span slot="footer" class="dialog-footer">
                 <el-button @click="errorOfRequest(form)" type="danger" plain>不通过</el-button>
                 <el-button @click="successOfRequest(form)" type="success" plain>通过</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
    import 'animate.css'
    // eslint-disable-next-line no-unused-vars
    import axios, {Axios as request} from "axios";
    export default {
        name: "PersonalView",
        data(){
            return{
                numberOfRequest:0,
                flagOfPersonalCenter:false,
                flagOfWeather:true,
                flagOfPersonalData:true,
                flagOfdealtArea:true,
                flagOfnotice:true,
                weatherObj:{},
                localTionObj:{},
                sentence:"",
                user: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},
                flagOfChangeUserData:false,
            //    审核信息内容
                inforOfRequest:{},
            //    控制弹窗
                dialogVisible: false,
            //    弹窗中的用户信息表
                form:{},
            }
        },
        methods:{
            // displayNone(){
            //     this.$bus.$emit('personalCenterChange',this.flagOfPersonalCenter)
            // },
            closeWeatherArea(){
                this.flagOfWeather = !this.flagOfWeather
            },
            closePersonalDataArea(){
                this.flagOfPersonalData = !this.flagOfPersonalData
            },
            closedealtArea(){
                this.$router.push({ name:'Login'})
            },
            closenoticeArea(){
                this.flagOfnotice = !this.flagOfnotice
            },
            loadWeather(){
                this.request.get("https://devapi.qweather.com/v7/weather/now?location=101120206&key=").then(res=>{
                    if(res.code === '200'){
                        this.weatherObj = res.now
                    }
                })
            },
            loadSentence(){
                this.request.get("https://v1.hitokoto.cn?c=j").then(res=>{
                        this.sentence = res.hitokoto

                })
            },
            //更新用户头像信息

            handleAvatarSuccess(res){
                var user = this.user
                this.user.adurl = res
                localStorage.removeItem("user")
                localStorage.setItem("user",JSON.stringify(this.user))
                this.request.post("http://localhost:9090/user/updataInforOfUser",user).then(res=>{
                    if(res.code==="200"){
                        this.$message.success("更换成功!")
                        this.$bus.$emit('updataAdurl',this.user.adurl)
                        return
                    }else {
                        this.$message.error("更换失败!")
                    }
                })
                console.log(res)
            },
        //    加载审核请求数量
            loadNumberOfRequest(id){
                this.request.get("http://localhost:9090/user/"+id).then(res=>{
                        this.numberOfRequest = res.data
                })
            },
        //    加载请求信息
            loadInforOfRequest(id){
                this.request.post("http://localhost:9090/user/"+id).then(res=>{
                    this.inforOfRequest = res.data
                })
            },
        //    确认关闭弹窗？
            handleClose(done) {
                this.$confirm('确认关闭？')
                    // eslint-disable-next-line no-unused-vars
                    .then(_ => {
                        done();
                    })
                    // eslint-disable-next-line no-unused-vars
                    .catch(_ => {});
            },
        //    弹出注册用户的详细信息
            informationReview(user){
                this.form =JSON.parse(JSON.stringify(user))
                this.dialogVisible = !this.dialogVisible
            },
        //    审核通过
            successOfRequest(user){
                console.log(user)
                if(user.nickname===null){
                    this.$message.warning("未填写用户真实姓名！")
                    return false
                }else if(user.role===null){
                    this.$message.warning("未赋予用户身份！")
                    return false
                }else{
                    user.auditstatus="通过"
                    this.request.post("http://localhost:9090/user/updataInforOfUser",user).then(res=>{
                        if (res.code==="200"){
                            this.$message.success("操作成功！")
                            this.loadNumberOfRequest(JSON.parse(localStorage.getItem("user")).id)
                            this.loadInforOfRequest(JSON.parse(localStorage.getItem("user")).id)
                            this.dialogVisible = false
                            return
                        }
                    })
                }

            },
        //    审核不通过
            errorOfRequest(user){
                user.auditstatus="不通过"
                this.request.post("http://localhost:9090/user/updataInforOfUser",user).then(res=>{
                    if (res.code==="200"){
                        this.$message.success("操作成功！")
                        this.loadNumberOfRequest(JSON.parse(localStorage.getItem("user")).id)
                        this.loadInforOfRequest(JSON.parse(localStorage.getItem("user")).id)
                        this.dialogVisible = false
                        return
                    }
                })
            }

        },
        created() {
            this.loadWeather()
            this.loadSentence()
            this.loadNumberOfRequest(JSON.parse(localStorage.getItem("user")).id)
            this.loadInforOfRequest(JSON.parse(localStorage.getItem("user")).id)
        }
    }
</script>

<style scoped>
.viewOfPersonalData{
    width: 300px;
    height: 650px;
    background-color: #F5F7F9;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    right: 0px;
}
    .informationArea{
        width: 80%;
        flex: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
    }
    .mainBodyOfPersonalCenter{
        flex: 14;
        width: 100%;
        overflow-y: auto;
        position: relative;
    }
    .mainBodyOfPersonalCenter div{
        border-radius: 15px;
        margin-top: 20px;
    }
    .personalDataArea{
        width: 80%;
        height: 170px;
        background-color: white;
        margin-left: 30px;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-image: radial-gradient(circle farthest-side at 10% 90%, #FFE8EA, #EDF3FF 70%, #EDF2FB);
    }
.personalDataArea div{
    margin-top: 0px;
}

    .dealtArea{
        width: 80%;
        height: 200px;
        background-color: pink;
        margin-left: 30px;
        position: relative;
    }
    .noticeArea{
        width: 80%;
        height: 200px;
        margin-left: 30px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: radial-gradient(circle farthest-side at 10% 90%, #FCEAED, #EDF3FF 70%, #EDF2FB);
    }
    .noticeArea div{
        margin-top: 0px;
    }
    .headAreaOfUser{
        flex: 5;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .weatherArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100px;
    background-color: white;
    margin-left: 30px;
    position: relative;
    background-image: url("../assets/images/bkgWeather.png");
    background-size: 100%;

    }
.weatherArea div{
    margin-top: 0px;
}
    .IconArea{
        flex: 2;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-size: 16px;
    }
    .IconArea i:hover{
        color: #257B5E;
        cursor: pointer;
    }
    .liList li{
    text-align: center;
    }
    .liList li:hover{
        color: #257B5E;
        background-color: rgba(37,123,94,0.1);
    }
.mainBodyOfPersonalCenter div {
    transition: all 0.5s;
}
.list-complete-move {
    transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
.list-complete-leave-active {
    position: absolute;
}

    .mainBodyOfPersonalCenter div:hover{
        transform: scale(1.01,1.01);
    }
    .close:hover{
        cursor: pointer;
        color: #2b542c;
    }
    .headOfPersonData{
        height: 100%;
        width: 100%;
        flex: 2;
        display: flex;
        align-items: center;
        padding: 0 15px;
        font-weight: bold;
        font-size: 16px;
    }
    .mainBodyOfPersonalData{
        flex: 6;
        width: 100%;
    }
    .defaultInformation,.changeDataOfUser{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
    }

.defaultInformation:hover{
    cursor: pointer;
    background-color: rgba(231,234,237,0.7);
    transform: scale(0,0);
    width: 99%;
    border-radius: 10px;
}
.defaultInformation div,.changeDataOfUser div{
    flex: 1;
    height: 100%;
    font-size: 13px;
    font-weight: bold;
    color: #464646;
    width: 100%;
    padding: 0 15px;
}
:deep .el-upload{
    width: 100%;
    height: 100%;
}
.avatar {
    width: 50px;
    height: 50px;
    display: block;
}
</style>