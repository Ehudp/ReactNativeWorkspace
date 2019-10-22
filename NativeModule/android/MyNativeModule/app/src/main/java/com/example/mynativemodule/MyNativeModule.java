package com.example.mynativemodule;

import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModule extends ReactContextBaseJavaModule {
    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void showMyToast(String msg){
        Toast.makeText(getCurrentActivity(),msg,Toast.LENGTH_SHORT).show();
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }
}
