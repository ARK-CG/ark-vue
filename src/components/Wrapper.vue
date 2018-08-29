<template>
    <div class="wrapper">
        <div id="container">
        {% for work in works %}

        <div class="item fade-in">
            <a href="{% url 'detail' work.id %}">
                <div class="imgWrap">
                    <p class="post-title">{{work.title}}</p>
                    <img src="{{ work.image }}" />
                </div>
            </a>
        </div>
        {% endfor %}


    </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
