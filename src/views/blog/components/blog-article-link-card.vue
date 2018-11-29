<template>
    <div class="article-link-card">
        <img src="../../../assets/1212.png">
        <div class="card-info">
            <div>
                <p class="title"><a>{{data.title}}</a></p>
                <p class="sub-title">{{data.desc}}</p>
            </div>
            <div class="info-list">
                <span class="time"><icon icon="#icon-time"/>{{data.createdAt}}</span>
                <span class="red-mounts"><icon icon="#icon-icon-test"/>{{data.viewCount}}</span>
                <span class="comment"><icon icon="#icon-comments"/>31</span>
                <span class="tags"><icon icon="#icon-tag"/>
                    <span v-for="item in data.tags" :key="item.id">{{item.name}}&nbsp;</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blog-article-link-card',
        props: {
            data: {
                type: Object
            }
        }
    }
</script>

<style lang="scss">
    .article-link-card {
        background: $container-bg;
        display: flex;
        margin-top: 10px;
        padding: 15px;
        transition: $trans;
        &:hover {
            box-shadow: $box-shadow;
            >img{
                transform: translateX(-10px);
            }
        }
        img {
            transition: transform .3s cubic-bezier(.215,.61,.355,1);
            cursor: pointer;
        }
        .card-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            .title {
                font-weight: 600;
                font-size: 15px;
                padding: 5px 0;
                >a{
                    transition: $trans;
                    &:hover{
                        text-decoration: underline;
                        margin-left: 15px;
                    }
                }
            }
            .sub-title{
                padding: 5px 0;
            }
            .info-list{
                padding: 5px 0;
                display: flex;
                justify-content: space-between;
                >span{
                    margin-right: 5px;
                    /*flex: 1;*/
                    >svg{
                        margin-right: 5px;
                    }
                }
                .tags{
                    >span{
                        /*margin-right: 5px;*/
                    }
                }
            }
        }
    }
</style>
