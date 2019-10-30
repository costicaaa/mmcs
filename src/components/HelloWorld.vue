<template>
    <div class="container">
        <div class="well well-lg">
            <form id="inputField" role="form">

                <input type="text" name="field00" size="3">
                <input type="text" name="field00" size="3" value="Team 1">
                <input type="text" name="field00" size="3" value="Team 2">
                <input type="text" name="field00" size="3" value="Team 3">
                <input type="text" name="field00" size="3" value="Team 4">

                <br>
                <input type="text" name="field00" size="3" value="Team 1">
                <input type="text" name="field01" size="3" value="      -">
                <input type="text" name="field00" size="3">
                <input type="text" name="field02" size="3">
                <input type="text" name="field03" size="3">

                <br>
                <input type="text" name="field10" size="3" value="Team 2">
                <input type="text" name="field10" size="3">
                <input type="text" name="field01" size="3" value="      -">
                <input type="text" name="field12" size="3">
                <input type="text" name="field13" size="3">

                <br>
                <input type="text" name="field10" size="3" value="Team 3">
                <input type="text" name="field20" size="3">
                <input type="text" name="field21" size="3">
                <input type="text" name="field01" size="3" value="      -">
                <input type="text" name="field23" size="3">

                <br>
                <input type="text" name="field10" size="3" value="Team 4">
                <input type="text" name="field20" size="3">
                <input type="text" name="field21" size="3">
                <input type="text" name="field22" size="3">
                <input type="text" name="field01" size="3" value="      -">
                <br>

                <br>
                <br>
                <br>
                <br>
                <input type="submit" onclick="calcJacobian()" value="calculate" name="calculate" class="btn btn-info">
            </form>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
