<template>
    <div 
        class="card p-4 mb-5"
        :class="`has-background-${ props.bgColor }-dark`"
    >
        <label 
            v-if="label"
            class="label has-text-white">
            {{label}}
        </label>
        <div class="field">
            <div class="control">
                <textarea 
                    :value="props.modelValue"
                    v-autofocus
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="textarea" 
                    ref="textAreaRef"
                    :placeholder="props.placeHolder"/>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"/>

            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeHolder: {
        type: String,
        default: 'Type something....'
    },
    label: {
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])

const textAreaRef = ref(null)

const focusTextArea = () => {
    textAreaRef.value.focus()
}

defineExpose({
    focusTextArea
})



</script>