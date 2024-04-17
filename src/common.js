import React from 'react'


export const setFlag = (setFlag, flagValue) => {
    // this.setFlag = this.setFlag.bind(this);
    console.log("setFlag", this)
    setFlag({ isLoading: !!!flagValue });
    return 9;
}