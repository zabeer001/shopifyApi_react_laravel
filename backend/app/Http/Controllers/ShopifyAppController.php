<?php

namespace App\Http\Controllers;

use App\Models\ShopifyApp;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ShopifyAppController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $shopifyStore = env('SHOPIFY_STORE');  // e.g., 'zabeer01.myshopify.com'
        $apiKey = env('SHOPIFY_API_KEY');      // Your API key
        $apiPassword = env('SHOPIFY_API_PASSWORD'); // Your API password

        // Make an authenticated API request to get all products
        $client = new \GuzzleHttp\Client();
        $response = $client->get("https://$shopifyStore/admin/api/2023-04/products.json", [
            'auth' => [$apiKey, $apiPassword]
        ]);

        // Decode the response to get product data
        $products = json_decode($response->getBody(), true)['products'];

        // Return the products to your view or process them
        return view('shopify.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShopifyApp  $shopifyApp
     * @return \Illuminate\Http\Response
     */
    public function show(ShopifyApp $shopifyApp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ShopifyApp  $shopifyApp
     * @return \Illuminate\Http\Response
     */
    public function edit(ShopifyApp $shopifyApp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShopifyApp  $shopifyApp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ShopifyApp $shopifyApp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShopifyApp  $shopifyApp
     * @return \Illuminate\Http\Response
     */
    public function destroy(ShopifyApp $shopifyApp)
    {
        //
    }
}
