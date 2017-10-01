<template>
    <div class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <div class="navbar-header">
                        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand logo" href="/">
                            <img src="/build/static/logo.png" class="img-responsive hidden-sm">
                        </a>
                    </div>
                </div>
                <div class="col-md-10">
                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-left">
                            <li>
                                <router-link :to="{ name: 'categories'}" >New test</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default { }
</script>
