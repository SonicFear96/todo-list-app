<template>
  <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">
                действительно удалить элемент?
              </slot>
            </div>
            <div class="modal-footer">
                <button class="button" @click="$emit('close')">
                  Отмена
                </button>
                <button class="button" @click="$emit('delete')">
                  Удалить
                </button>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modals-component'
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: darkgray;
}

.modal-body {
  margin: 20px 0;
}
.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>