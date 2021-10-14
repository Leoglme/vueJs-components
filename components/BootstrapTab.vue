<template>
  <div style="width: 50vw;">
    <b-card>
      <b-tabs content-class="mt-3" fill>
        <b-tab active>
          <template #title>
            <span class="tab-title" v-wave>First</span>
          </template>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae neque et urna volutpat blandit.
            Aliquam ligula augue, scelerisque eu gravida pharetra, bibendum vulputate orci. Duis dictum rutrum dapibus.
            Proin et tristique magna, vitae mollis dui. Suspendisse mollis risus leo, at viverra erat finibus vitae.
            Nulla ultrices, arcu vulputate eleifend faucibus, odio diam pellentesque neque, quis fringilla massa sem
            faucibus ante. Integer sed enim vitae eros vehicula congue. Nam cursus pulvinar eros, ut viverra lectus.
            Donec ultricies, ligula in pretium bibendum, odio purus eleifend mauris, nec consectetur ante neque sit amet
            arcu. Nunc nulla leo, feugiat id vehicula eget, venenatis ac elit. Phasellus gravida ante sit amet ex
            posuere aliquet. Vivamus nisi ex, pretium vel tortor sit amet, hendrerit sodales elit. Duis porttitor diam
            leo, quis fringilla ligula gravida quis. </p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tab-title" v-wave>Second</span>
          </template>
          <p>Cras a metus eu sapien consequat vehicula nec a eros. Praesent non accumsan justo, non consequat magna.
            Mauris ullamcorper leo est, a sagittis nunc tincidunt quis. Aliquam erat volutpat. Vestibulum in metus
            tempor, accumsan sapien consectetur, condimentum sem. Fusce ullamcorper aliquet porttitor. Morbi rutrum
            sapien sed venenatis ullamcorper. Donec vehicula volutpat dui, sed pulvinar nisl fringilla eget. Maecenas
            venenatis, purus vitae elementum lacinia, risus risus tincidunt tellus, ut finibus augue sapien a risus.
            Maecenas lacinia lorem a felis ultrices, eget egestas ligula aliquet. Etiam interdum viverra sem, sed
            interdum neque. Nam blandit non ex et rhoncus. Nam maximus nisl ut mi laoreet, quis tristique velit commodo.
            Praesent varius est pharetra, imperdiet nibh quis, vehicula nisi. </p>
        </b-tab>
      </b-tabs>
    </b-card>


  </div>
</template>


<script>
export default {
  name: 'BootstrapTab',
  components: {},
  data() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
