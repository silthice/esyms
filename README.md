# esyms

# screenshot1
<img src="https://github.com/silthice/esyms/blob/master/screenshots/esyms1.png" width="300" height="600" />

# Errors that i faced
1.
LoadError - dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle,
can be solved by following
https://stackoverflow.com/questions/71815618/swift-cocoa-pods-issue-library-ruby-gems-2-6-0-gems-ffi-1-15-5-lib-ffi-c-bund

step 1 - sudo arch -x86_64 gem install ffi
step 2 - arch -x86_64 pod install in ios folder

2. 
React Native on Apple Silicon M1 - The linked library 'libPods-ProjectName.a' is missing one or more architectures required by this target: x86_64
can be solved by excluding arm64 in build settings->excluded architecture
