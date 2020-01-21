<template>
    <header class="header">
        <h1>{{sitetitle}}</h1>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        sitetitle: String,
    }
}
</script>

<style scoped>
header {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
}

header h1 {
    font-family: var(--serif);
    font-style: italic;
    color: white;
}
</style>