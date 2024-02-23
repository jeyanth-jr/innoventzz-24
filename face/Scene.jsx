/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: ilyha2512 (https://sketchfab.com/ilyha2512)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/face-reference-assets-classic-7fdd3208de5049a09b7789e0cea3e45f
Title: Face-reference-assets-classic
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.faceMesh_defaultMaterial_0.geometry} material={materials.defaultMaterial} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
