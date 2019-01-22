<template>
  <div>
    <form v-if="!isSubmitted" @submit.prevent="submit" novalidate>
      <div class="form-group">
        <label for="url">{{ $t('form.url') }} *</label>
        <input type="text" class="form-control" id="url" v-model.lazy.trim="form.url" @blur="onFieldBlur('url')" v-bind:class="getFieldClasses('url')">
        <div v-if="isErrorField('url')" class="invalid-feedback">{{ $t('error.fieldRequired', { field: $t('form.url') }) }}</div>
      </div>
      <div id="app1">
        <input type="text" v-model="url">
        <ol>
          <li v-for="repo in repos">{{repo}}</li>
        </ol>
      </div>
      <div class="alert alert-danger" v-if="isError">
        <p class="mb-0">
          <strong>{{ $t(errorHeader) }}</strong>
        </p>
        <ul class="mb-0 pl-3" v-if="errors.length > 0">
          <li v-for="error in errors" v-bind:key="error.field">
            <span v-if="error.field">{{ $t('form.'+error.field) }}<span v-if="error.message">: {{ $t(error.message) }}</span></span>
            <span v-else-if="error.message">{{ $t(error.message) }}</span>
          </li>
        </ul>
      </div>
      <div class="form-group">
        <button v-on:click.prevent="submit" class="btn btn-primary">
          <span v-if="submitting">{{ $t('form.submitting' ) }} <img src="../../assets/loader.svg" /></span>
          <span v-else>{{ $t('form.submit' ) }}</span>
        </button>
      </div>
    </form>
    <div v-else>
      <div class="alert alert-success">
        <strong>{{ $t('form.submitted' ) }}</strong>
      </div>
      <div class="alert alert-info">
        <p><strong>{{ $t('form.sentInfo' ) }}</strong></p>
        <pre>
            {{form}}
        </pre>
      </div>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload()">{{ $t('form.return' ) }}</a>
      </p>

    </div>
  </div>
</template>


<script src="./Form.js"></script>
<style src="./Form.scss" lang="scss" scoped></style>
