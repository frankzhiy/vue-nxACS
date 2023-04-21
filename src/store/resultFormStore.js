import { defineStore } from "pinia";
import { reactive } from "vue";

export const testResultAttributeDataStore = defineStore({
    id: "testResultAttributeData",
    state: () => ({
        data: reactive({}),
    }),
    actions: {
        resetData() {
            this.data = reactive({});
        },
        saveAttributeData(caseNumber, attributeData) {
            // 在保存之前重置 data 对象
            this.resetData();

            // 直接更新 data 对象
            this.data[caseNumber] = attributeData;
        },
    },
});
export const angiographyResultAttributeDataStore = defineStore({
    id: "angiographyResultAttributeData",
    state: () => ({
        data: reactive({}),
    }),
    actions: {
        resetData() {
            this.data = reactive({});
        },
        saveAttributeData(caseNumber, attributeData) {
            // 在保存之前重置 data 对象
            this.resetData();

            // 直接更新 data 对象
            this.data[caseNumber] = attributeData;
        },
    },
});
export const medicalHistoryResultAttributeDataStore = defineStore({
    id: "medicalHistoryResultAttributeData",
    state: () => ({
        data: reactive({}),
    }),
    actions: {
        resetData() {
            this.data = reactive({});
        },
        saveAttributeData(caseNumber, attributeData) {
            // 在保存之前重置 data 对象
            this.resetData();

            // 直接更新 data 对象
            this.data[caseNumber] = attributeData;
        },
    },
});
export const followUpResultAttributeDataStore = defineStore({
    id: "followUpAttributeData",
    state: () => ({
        data: reactive({}),
    }),
    actions: {
        resetData() {
            this.data = reactive({});
        },
        saveAttributeData(caseNumber, attributeData) {
            // 在保存之前重置 data 对象
            this.resetData();

            // 直接更新 data 对象
            this.data[caseNumber] = attributeData;
        },
    },
});
export const echocardiographyResultAttributeDataStore = defineStore({
    id: "echocardiographyResultAttributeData",
    state: () => ({
        data: reactive({}),
    }),
    actions: {
        resetData() {
            this.data = reactive({});
        },
        saveAttributeData(caseNumber, attributeData) {
            // 在保存之前重置 data 对象
            this.resetData();

            // 直接更新 data 对象
            this.data[caseNumber] = attributeData;
        },
    },
});
