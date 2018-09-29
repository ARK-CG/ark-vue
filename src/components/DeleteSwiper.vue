<template>
  <div class="swipers swiper-container">
    <swiper :options="swiperOption">
      <swiper -slide class="submited-list">
        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>

        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>

        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>
      </swiper>

      <swiper -slide class="submited-list">
        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>

        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>

        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>
      </swiper>

      <swiper -slide class="submited-list">
        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>

        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>

        <div class="list-item">
          <div class="text">
            <h3>タイトルが入りますタイトルが入ります</h3>
            <p class="date">2018/9/29</p>
            <p>テキストが入りますテキストが入ります</p>
          </div>

          <div class="delete-btn">
            <button type="button" name="button">削除</button>
          </div>
        </div>
      </swiper>
    </swiper>
  </div>
</template>

<script>

export default {
  name: "DeleteSwiper",
  data() {
    return {
      // list: data,
      swiperOption: {
        //http://idangero.us/swiper/api/
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 6000
        },
        speed:1000,
        loop: true,
        centeredSlides: true,
        effect:"fade"
      }
    };
  }
};
</script>

<style media="screen" lang="scss">
  .list-item{
    background: #fff;
    padding: 12px;
    border-radius: 5px;
    box-shadow:0px 0px 3px;
    margin: 18px 0;
    .text{
      h3{
        font-size: 14px;
        margin-bottom: 7px;
        padding-bottom: 7px;
        border-bottom: solid 0.5px #ccc;
      }
      p{
        font-size: 12px;
        white-space: pre-wrap;
        margin: 2px 0 8px;
        line-height: 140%;
      }
      .date{
        color: #aaa;
        margin: 0;
      }
    }
    .delete-btn{
      text-align: right;
      button{
        font-size: 12px;
        background: #E5000B;
        border-radius: 3px;
        color: #fff;
        border: none;
        padding: 4px 10px;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
</style>
