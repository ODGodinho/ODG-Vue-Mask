# ODG-Vue-Mask
Node plugin para mascaras de texto

# Documentation, Demo & Examples

http://odgodinho.github.io/ODG-Vue-Mask


## Install it via Package Managers
### Yarn
`yarn add @odg/odg-vue-mask`
### NPM
`npm i @odg/odg-vue-mask`
### Brownser
`<script src="dist/ODG-Vue-Mask.js">`

You can import the library or use the global element defined in window


### CPF/CNPJ Example
```html
<input type="text" placeholder="CPF/CNPJ" v-odg-mask="[ '000.000.000-00', '00.000.000/0000-00' ]" v-model="cpf_cnpj" />
```

### Save full ODGMask Object
```html
<input type="text" placeholder="CPF/CNPJ" v-odg-mask="[ '000.000.000-00', '00.000.000/0000-00' ]"  v-model="saveObjectTest.value" />
<script>
  new Vue({
      data() {
          return {
              saveObjectTest: {
                  value: ''
              },
          }
      },
  })
</script>
```
