<script>
    let request = [{
        "product": 1,
        "taxNumber": "DE123456789",
        "couponCode": "D15"
    }];

    async function fetchRequest() {
        const response = await fetch('http://localhost:8000/calculate-price');
        request = await response.json();
    }

    $: fetchRequest();
</script>