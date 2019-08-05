<script>
    export let obj;

    $: data = obj ? JSON.stringify(obj, null, 2) : "";
</script>
<div>
    <div>
        <button on:click="{() =>{obj.rowsTitle[0][0] = "hello"}}" >Click</button>
    </div>
    <pre>
        <code>
            {data}
        </code>
    </pre>
</div>
