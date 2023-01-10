<script setup lang="ts">
import { ElButton, ElCol, ElForm, ElFormItem, ElInput, ElRow } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/stores/user'
import type { LoginData } from '@/types/loginData'

definePageMeta({
  layout: false,
})

const form: LoginData = reactive({
  username: 'admin',
  password: '123456',
})

const formRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  username: [{ required: true, message: 'Please input user name', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
  ],
})

const userStore = useUserStore()
const router = useRouter()
const { query } = useRoute()
console.log('query', query)

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl)
    return

  await formEl.validate(async (valid, fields) => {
    if (valid) {
      userStore.login(form)
        .then((res) => {
          if (query.redirect) {
            navigateTo(query.redirect as string)
            return
          }
          navigateTo('/console')
        })
        .catch(e => console.log(e))
    }
    else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <ElRow class="min-h-screen bg-indigo-500">
    <ElCol :lg="16" :md="12">
      <div class="h-full flex items-center justify-center">
        <div>
          <div class="text-5xl text-light-50 font-bold mb-4">
            欢迎光临
          </div>
          <div class="text-light-50">
            《vue3 vite 实战商城后台开发》
          </div>
        </div>
      </div>
    </ElCol>
    <ElCol :lg="8" :md="12">
      <div class="h-full bg-light-50 flex items-center justify-center flex-col">
        <h2 class="text-indigo-500 text-3xl font-bold">
          欢迎回来
        </h2>
        <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
          <span class="h-[1px] w-16 bg-gray-200" />
          <span>账号密码登录</span>
          <span class="h-[1px] w-16 bg-gray-200" />
        </div>
        <ElForm ref="formRef" :model="form" class="w-[250px]" :rules="rules">
          <ElFormItem prop="username">
            <ElInput v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <Icon name="ep-user" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem prop="password">
            <ElInput v-model="form.password" type="password" show-password placeholder="请输入密码">
              <template #prefix>
                <Icon name="ep-lock" />
              </template>
            </ElInput>
          </ElFormItem>
          <ElFormItem>
            <ElButton class="w-[250px]" type="primary" @click="onSubmit(formRef)">
              {{ $t('login') }}
            </ElButton>
          </ElFormItem>
        </ElForm>
      </div>
    </ElCol>
  </ElRow>
</template>

<style lang="scss" scoped>

</style>
