/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

// aluminum
import aluMap from '../../assets/images/materials/maps/alu-color.png'
import aluMetalMap from '../../assets/images/materials/metalnessmaps/alu-metalness.jpg'
import aluNormalMap from '../../assets/images/materials/normalmaps/alu-normal.jpg'
import aluRoughMap from '../../assets/images/materials/roughnessmaps/alu-roughness.jpg'
// black plastic
import blackPlasticMap from '../../assets/images/materials/maps/black-plastic-color.png'
import blackPlasticRoughMap from '../../assets/images/materials/roughnessmaps/black-plastic-roughness.jpg'
import blackPlasticNormalMap from '../../assets/images/materials/normalmaps/black-plastic-normal.jpg'






// script
export function Firstamp(props) {
  const { nodes } = useGLTF('/firstamp.glb')
  // loader 
  const alu = useTexture({
    map: aluMap,
    metalnessMap: aluMetalMap,
    normalMap: aluNormalMap,
    roguhnessMap: aluRoughMap
  })
  // const alu = {
  //   color: 'lightgrey',
  //   metalness: 1,
  // }
  const blackPlastic = useTexture({
    map: blackPlasticMap,
    roughnessMap: blackPlasticRoughMap,
    normalMap: blackPlasticNormalMap
  })
  const Glass = {
    color: 0xffffff,
    metalness: 0,
    roughness: 0.2,
    transmission: 1,
    ior: 1.5,
    reflectivity: 0.1,
    thickness: 2.5,
    // envMap: hdrEquirect,
    // envMapIntensity: options.envMapIntensity,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    // normalScale: new THREE.Vector2(options.normalScale),
    // normalMap: normalMapTexture,
    // clearcoatNormalMap: normalMapTexture,
    // clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale),
  }
  const Stateglass = {
    color: 0xffffff,
    metalness: 0,
    roughness: 0.2,
    transmission: 0.9,
    ior: 1.5,
    reflectivity: 0,
    thickness: 2.5,
    // envMap: hdrEquirect,
    // envMapIntensity: options.envMapIntensity,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    // normalScale: new THREE.Vector2(options.normalScale),
    // normalMap: normalMapTexture,
    // clearcoatNormalMap: normalMapTexture,
    // clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale),
  }

  


  // return JSX
  return (
    <group {...props} dispose={null} >
      {/* wood */}
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>


      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} receiveShadow castShadow/>

      {/* frontpanel */}
      <mesh geometry={nodes.mesh_7.geometry} receiveShadow castShadow>
        <meshStandardMaterial {...alu}/>
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      {/* toggle ring */}
      <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* toggle */}
      <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      {/* toggle ring */}
      <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* toggle */}
      <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* input ring */}
      <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* back-plastic */}
      <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* top panel */}
      <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} receiveShadow castShadow>
      <meshStandardMaterial {...alu}/>
      </mesh>

      {/* tube-plastic */}
      <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* Glass */}
      <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      {/* tube-light */}
      <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      {/* tube-bracket */}
      <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* tube-plastic */}
      <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* Glass */}
      <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      {/* tube-light */}
      <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      {/* tube-bracket */}
      <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_39.geometry} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_43.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_44.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_45.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_47.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_43.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_44.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_45.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_47.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>

      <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_43.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_44.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_45.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_62.geometry} material={nodes.mesh_47.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>


      <mesh geometry={nodes.mesh_63.geometry} material={nodes.mesh_43.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      <mesh geometry={nodes.mesh_64.geometry} material={nodes.mesh_44.material} receiveShadow castShadow>
      <meshPhysicalMaterial {...Glass}/>
      </mesh>
      <mesh geometry={nodes.mesh_65.geometry} material={nodes.mesh_45.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      <mesh geometry={nodes.mesh_67.geometry} material={nodes.mesh_47.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* statelight-ring */}
      <mesh geometry={nodes.mesh_68.geometry} material={nodes.mesh_68.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      {/* start-power-light */}
      </mesh>
      <mesh geometry={nodes.mesh_69.geometry} material={nodes.mesh_69.material} receiveShadow castShadow>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1.4} color="lightblue" roughness={0} metalness={0.3} />
      </mesh>
      {/* Glass */}
      <mesh geometry={nodes.mesh_70.geometry} material={nodes.mesh_70.material} receiveShadow castShadow >
      <meshPhysicalMaterial {...Stateglass}/>
      </mesh>
      {/* toggle-ring */}
      <mesh geometry={nodes.mesh_71.geometry} material={nodes.mesh_71.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* toggle */}
      <mesh geometry={nodes.mesh_72.geometry} material={nodes.mesh_72.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* toggle-ring */}
      <mesh geometry={nodes.mesh_73.geometry} material={nodes.mesh_73.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
      {/* toggle */}
      <mesh geometry={nodes.mesh_74.geometry} material={nodes.mesh_74.material} receiveShadow castShadow>
      <meshStandardMaterial {...blackPlastic}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/firstamp.glb')
