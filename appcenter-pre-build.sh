
echo "Injecting secrets..."
echo "Updating android secret"
echo $ANDROID_SECRET | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/assets/appcenter-config.json"
echo "Updating iOS secret"
echo $IOS_SECRET | base64 --decode > "$APPCENTER_SOURCE_DIRECTORY/ios/PedsGuide/AppCenter-Config.plist"
echo "Finished injecting secrets."