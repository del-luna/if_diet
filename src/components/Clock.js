import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";

const Num = styled.div``;

const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 280px;
  height: 280px;
  border: 8px solid black;
  border-radius: 50%;
  position: relative;
  margin: 10px auto;
  margin-bottom: 0px;
  background-color: #f5f5f5;
  ${Num}{
    position: absolute;
    z-index: 1;
    font-size: 14px;
  }
  ${Num}:nth-child(3){
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    right: 2px;
  }
  ${Num}:nth-child(6){
    left: 0;
    right: 0;
    bottom: 0;
  }
  ${Num}:nth-child(9){
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    left: 2px;
  }
  ${Num}:nth-child(12){
    left: 0;
    right: 0;
    top: 0;
  }
  
`;


export default function Clock(){

  const ref = useRef(null);
  let numList = [];
  useEffect(()=>{
    numList = ref.current.children;

  })

  for (var key in numList){
    if(key+1 === 3 || key+1 === 6 || key+1 === 9 || key+1 === 12) continue;
    console.log(key, numList[key]);
  }


  return(
    <ClockContainer ref={ref}>
      <Num>1</Num>
      <Num>2</Num>
      <Num>3</Num>
      <Num>4</Num>
      <Num>5</Num>
      <Num>6</Num>
      <Num>7</Num>
      <Num>8</Num>
      <Num>9</Num>
      <Num>10</Num>
      <Num>11</Num>
      <Num>12</Num>
    </ClockContainer>
  );
}