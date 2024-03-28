# bookmark-buddy
A bookmark helper to help users easily and efficiently keep track of their favorite websites or documents


## Instructions

### Dialogflow

    Go to the Google Cloud Console (https://console.cloud.google.com/).
    Select your project or create a new one.
    Navigate to the "IAM & Admin" > "Service accounts" page.
    Click on "Create Service Account" at the top of the page.
    Enter a name and description for your service account.
    Assign the necessary permissions to the service account. For accessing Dialogflow, you'll need at least the "Dialogflow API Client" role, but you may need additional permissions depending on your specific use case.
    Click on "Continue" and then "Done" to create the service account.
    Once the service account is created, locate it in the list of service accounts and click on the three dots on the right side.
    Select "Manage keys" and then click on "Add key" > "Create new key."
    Choose the key type as "JSON" and click on "Create." This will download a JSON file containing your service account credentials.

After downloading the JSON file, you'll have the necessary credentials to authenticate your requests to the Dialogflow API. You'll use these credentials to authenticate your browser extension when communicating with Dialogflow.

Make sure to keep the JSON file containing your service account credentials secure and don't expose it publicly, as it grants access to your Google Cloud resources.

Once you have the JSON file, you can extract the required information, such as the client email and private key, to authenticate your requests to Dialogflow from your browser extension. If you need further assistance with integrating the credentials into your extension, feel free to ask!



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

