# Quick Build Instructions for Push Notifications

## ⚠️ CRITICAL: Push notifications DON'T work in Expo Go!

You must build an APK and install it on a physical device.

## Steps:

### 1. Build APK
```bash
eas build --platform android --profile production
```

### 2. Wait for Build
- Build takes 10-15 minutes
- You'll get a download link when done

### 3. Install APK
- Download APK from the link
- Transfer to your Android phone
- Install it (enable "Install from unknown sources")

### 4. Test Push Notifications
- Login to the app
- Send a message from another account
- Close the app completely
- You should receive a push notification!

## That's it! 🎉

The setup is already done in the code. You just need to:
1. Upload the PHP files to your Hostinger server
2. Run the SQL schema in your MySQL database
3. Build and install the APK

No Firebase needed - everything uses your MySQL database on Hostinger!
