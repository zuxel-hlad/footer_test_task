import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

import { UA_PHONE_FORMAT } from '~/constants'

export const validationSchema = {
    validationSchema: toTypedSchema(
        yup.object({
            userName: yup.string().required('це поле обовʼязкове'),
            userPhone: yup.string().required('Будь ласка вкажіть номер телефону').matches(UA_PHONE_FORMAT, 'Будь ласка введіть номер у форматі +380XXXXXXXXX'),
        }),
    ),
}
