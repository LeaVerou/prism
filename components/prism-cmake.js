Prism.languages.cmake = {
    'comment': {
        pattern: /#.*/,
    },
    'string': {
        pattern: /"(?:[^\\"]|\\.)*"/,
        greedy: true
    },
    'punctuation': /[()>}]|\$[<{]/,
    'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    'variable': /\b(\w+_BINARY_DIR|\w+_DESCRIPTION|\w+_HOMEPAGE_URL|\w+_SOURCE_DIR|\w+_VERSION|\w+_VERSION_MAJOR|\w+_VERSION_MINOR|\w+_VERSION_PATCH|\w+_VERSION_TWEAK|\w+_ROOT|ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CMAKE_\w+_POSTFIX|CMAKE_\w+_ANDROID_TOOLCHAIN_MACHINE|CMAKE_\w+_ANDROID_TOOLCHAIN_PREFIX|CMAKE_\w+_ANDROID_TOOLCHAIN_SUFFIX|CMAKE_\w+_ARCHIVE_APPEND|CMAKE_\w+_ARCHIVE_CREATE|CMAKE_\w+_ARCHIVE_FINISH|CMAKE_\w+_CLANG_TIDY|CMAKE_\w+_COMPILER|CMAKE_\w+_COMPILER_ABI|CMAKE_\w+_COMPILER_AR|CMAKE_\w+_COMPILER_ARCHITECTURE_ID|CMAKE_\w+_COMPILER_EXTERNAL_TOOLCHAIN|CMAKE_\w+_COMPILER_ID|CMAKE_\w+_COMPILER_LAUNCHER|CMAKE_\w+_COMPILER_LOADED|CMAKE_\w+_COMPILER_PREDEFINES_COMMAND|CMAKE_\w+_COMPILER_RANLIB|CMAKE_\w+_COMPILER_TARGET|CMAKE_\w+_COMPILER_VERSION|CMAKE_\w+_COMPILER_VERSION_INTERNAL|CMAKE_\w+_COMPILE_OBJECT|CMAKE_\w+_CPPCHECK|CMAKE_\w+_CPPLINT|CMAKE_\w+_CREATE_SHARED_LIBRARY|CMAKE_\w+_CREATE_SHARED_MODULE|CMAKE_\w+_CREATE_STATIC_LIBRARY|CMAKE_\w+_FLAGS|CMAKE_\w+|CMAKE_\w+_INIT|CMAKE_\w+_FLAGS_DEBUG|CMAKE_\w+_FLAGS_DEBUG_INIT|CMAKE_\w+_FLAGS_INIT|CMAKE_\w+_FLAGS_MINSIZEREL|CMAKE_\w+_FLAGS_MINSIZEREL_INIT|CMAKE_\w+_FLAGS_RELEASE|CMAKE_\w+_FLAGS_RELEASE_INIT|CMAKE_\w+_FLAGS_RELWITHDEBINFO|CMAKE_\w+_FLAGS_RELWITHDEBINFO_INIT|CMAKE_\w+_IGNORE_EXTENSIONS|CMAKE_\w+_IMPLICIT_INCLUDE_DIRECTORIES|CMAKE_\w+_IMPLICIT_LINK_DIRECTORIES|CMAKE_\w+_IMPLICIT_LINK_FRAMEWORK_DIRECTORIES|CMAKE_\w+_IMPLICIT_LINK_LIBRARIES|CMAKE_\w+_INCLUDE_WHAT_YOU_USE|CMAKE_\w+_LIBRARY_ARCHITECTURE|CMAKE_\w+_LINKER_PREFERENCE|CMAKE_\w+_LINKER_PREFERENCE_PROPAGATES|CMAKE_\w+_LINKER_WRAPPER_FLAG|CMAKE_\w+_LINKER_WRAPPER_FLAG_SEP|CMAKE_\w+_LINK_EXECUTABLE|CMAKE_\w+_OUTPUT_EXTENSION|CMAKE_\w+_PLATFORM_ID|CMAKE_\w+_SIMULATE_ID|CMAKE_\w+_SIMULATE_VERSION|CMAKE_\w+_SIZEOF_DATA_PTR|CMAKE_\w+_SOURCE_FILE_EXTENSIONS|CMAKE_\w+_STANDARD_INCLUDE_DIRECTORIES|CMAKE_\w+_STANDARD_LIBRARIES|CMAKE_\w+_VISIBILITY_PRESET|CMAKE_ABSOLUTE_DESTINATION_FILES|CMAKE_ANDROID_ANT_ADDITIONAL_OPTIONS|CMAKE_ANDROID_API|CMAKE_ANDROID_API_MIN|CMAKE_ANDROID_ARCH|CMAKE_ANDROID_ARCH_ABI|CMAKE_ANDROID_ARM_MODE|CMAKE_ANDROID_ARM_NEON|CMAKE_ANDROID_ASSETS_DIRECTORIES|CMAKE_ANDROID_GUI|CMAKE_ANDROID_JAR_DEPENDENCIES|CMAKE_ANDROID_JAR_DIRECTORIES|CMAKE_ANDROID_JAVA_SOURCE_DIR|CMAKE_ANDROID_NATIVE_LIB_DEPENDENCIES|CMAKE_ANDROID_NATIVE_LIB_DIRECTORIES|CMAKE_ANDROID_NDK|CMAKE_ANDROID_NDK_DEPRECATED_HEADERS|CMAKE_ANDROID_NDK_TOOLCHAIN_HOST_TAG|CMAKE_ANDROID_NDK_TOOLCHAIN_VERSION|CMAKE_ANDROID_PROCESS_MAX|CMAKE_ANDROID_PROGUARD|CMAKE_ANDROID_PROGUARD_CONFIG_PATH|CMAKE_ANDROID_SECURE_PROPS_PATH|CMAKE_ANDROID_SKIP_ANT_STEP|CMAKE_ANDROID_STANDALONE_TOOLCHAIN|CMAKE_ANDROID_STL_TYPE|CMAKE_APPBUNDLE_PATH|CMAKE_AR|CMAKE_ARCHIVE_OUTPUT_DIRECTORY|CMAKE_ARCHIVE_OUTPUT_DIRECTORY_\w+|CMAKE_ARGC|CMAKE_ARGV0|CMAKE_AUTOGEN_ORIGIN_DEPENDS|CMAKE_AUTOGEN_PARALLEL|CMAKE_AUTOGEN_VERBOSE|CMAKE_AUTOMOC|CMAKE_AUTOMOC_COMPILER_PREDEFINES|CMAKE_AUTOMOC_DEPEND_FILTERS|CMAKE_AUTOMOC_MACRO_NAMES|CMAKE_AUTOMOC_MOC_OPTIONS|CMAKE_AUTOMOC_RELAXED_MODE|CMAKE_AUTORCC|CMAKE_AUTORCC_OPTIONS|CMAKE_AUTOUIC|CMAKE_AUTOUIC_OPTIONS|CMAKE_AUTOUIC_SEARCH_PATHS|CMAKE_BACKWARDS_COMPATIBILITY|CMAKE_BINARY_DIR|CMAKE_BUILD_RPATH|CMAKE_BUILD_RPATH_USE_ORIGIN|CMAKE_BUILD_TOOL|CMAKE_BUILD_TYPE|CMAKE_BUILD_WITH_INSTALL_NAME_DIR|CMAKE_BUILD_WITH_INSTALL_RPATH|CMAKE_CACHEFILE_DIR|CMAKE_CACHE_MAJOR_VERSION|CMAKE_CACHE_MINOR_VERSION|CMAKE_CACHE_PATCH_VERSION|CMAKE_CFG_INTDIR|CMAKE_CL_64|CMAKE_CODEBLOCKS_COMPILER_ID|CMAKE_CODEBLOCKS_EXCLUDE_EXTERNAL_FILES|CMAKE_CODELITE_USE_TARGETS|CMAKE_COLOR_MAKEFILE|CMAKE_COMMAND|CMAKE_COMPILER_2005|CMAKE_COMPILER_IS_GNUCC|CMAKE_COMPILER_IS_GNUCXX|CMAKE_COMPILER_IS_GNUG77|CMAKE_COMPILE_PDB_OUTPUT_DIRECTORY|CMAKE_COMPILE_PDB_OUTPUT_DIRECTORY_\w+|CMAKE_CONFIGURATION_TYPES|CMAKE_CPACK_COMMAND|CMAKE_CROSSCOMPILING|CMAKE_CROSSCOMPILING_EMULATOR|CMAKE_CTEST_COMMAND|CMAKE_CUDA_EXTENSIONS|CMAKE_CUDA_HOST_COMPILER|CMAKE_CUDA_SEPARABLE_COMPILATION|CMAKE_CUDA_STANDARD|CMAKE_CUDA_STANDARD_REQUIRED|CMAKE_CUDA_TOOLKIT_INCLUDE_DIRECTORIES|CMAKE_CURRENT_BINARY_DIR|CMAKE_CURRENT_LIST_DIR|CMAKE_CURRENT_LIST_FILE|CMAKE_CURRENT_LIST_LINE|CMAKE_CURRENT_SOURCE_DIR|CMAKE_CXX_COMPILE_FEATURES|CMAKE_CXX_EXTENSIONS|CMAKE_CXX_STANDARD|CMAKE_CXX_STANDARD_REQUIRED|CMAKE_C_COMPILE_FEATURES|CMAKE_C_EXTENSIONS|CMAKE_C_STANDARD|CMAKE_C_STANDARD_REQUIRED|CMAKE_DEBUG_POSTFIX|CMAKE_DEBUG_TARGET_PROPERTIES|CMAKE_DEPENDS_IN_PROJECT_ONLY|CMAKE_DIRECTORY_LABELS|CMAKE_DISABLE_FIND_PACKAGE_\w+|CMAKE_DL_LIBS|CMAKE_DOTNET_TARGET_FRAMEWORK_VERSION|CMAKE_ECLIPSE_GENERATE_LINKED_RESOURCES|CMAKE_ECLIPSE_GENERATE_SOURCE_PROJECT|CMAKE_ECLIPSE_MAKE_ARGUMENTS|CMAKE_ECLIPSE_VERSION|CMAKE_EDIT_COMMAND|CMAKE_ENABLE_EXPORTS|CMAKE_ERROR_DEPRECATED|CMAKE_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|CMAKE_EXECUTABLE_SUFFIX|CMAKE_EXE_LINKER_FLAGS|CMAKE_EXE_LINKER_FLAGS_\w+|CMAKE_EXE_LINKER_FLAGS_\w+_INIT|CMAKE_EXE_LINKER_FLAGS_INIT|CMAKE_EXPORT_COMPILE_COMMANDS|CMAKE_EXPORT_NO_PACKAGE_REGISTRY|CMAKE_EXTRA_GENERATOR|CMAKE_EXTRA_SHARED_LIBRARY_SUFFIXES|CMAKE_FIND_APPBUNDLE|CMAKE_FIND_FRAMEWORK|CMAKE_FIND_LIBRARY_CUSTOM_LIB_SUFFIX|CMAKE_FIND_LIBRARY_PREFIXES|CMAKE_FIND_LIBRARY_SUFFIXES|CMAKE_FIND_NO_INSTALL_PREFIX|CMAKE_FIND_PACKAGE_NAME|CMAKE_FIND_PACKAGE_NO_PACKAGE_REGISTRY|CMAKE_FIND_PACKAGE_NO_SYSTEM_PACKAGE_REGISTRY|CMAKE_FIND_PACKAGE_RESOLVE_SYMLINKS|CMAKE_FIND_PACKAGE_SORT_DIRECTION|CMAKE_FIND_PACKAGE_SORT_ORDER|CMAKE_FIND_PACKAGE_WARN_NO_MODULE|CMAKE_FIND_ROOT_PATH|CMAKE_FIND_ROOT_PATH_MODE_INCLUDE|CMAKE_FIND_ROOT_PATH_MODE_LIBRARY|CMAKE_FIND_ROOT_PATH_MODE_PACKAGE|CMAKE_FIND_ROOT_PATH_MODE_PROGRAM|CMAKE_FOLDER|CMAKE_FRAMEWORK_PATH|CMAKE_Fortran_FORMAT|CMAKE_Fortran_MODDIR_DEFAULT|CMAKE_Fortran_MODDIR_FLAG|CMAKE_Fortran_MODOUT_FLAG|CMAKE_Fortran_MODULE_DIRECTORY|CMAKE_GENERATOR|CMAKE_GENERATOR_INSTANCE|CMAKE_GENERATOR_PLATFORM|CMAKE_GENERATOR_TOOLSET|CMAKE_GHS_NO_SOURCE_GROUP_FILE|CMAKE_GLOBAL_AUTOGEN_TARGET|CMAKE_GLOBAL_AUTOGEN_TARGET_NAME|CMAKE_GLOBAL_AUTORCC_TARGET|CMAKE_GLOBAL_AUTORCC_TARGET_NAME|CMAKE_GNUtoMS|CMAKE_HOME_DIRECTORY|CMAKE_HOST_APPLE|CMAKE_HOST_SOLARIS|CMAKE_HOST_SYSTEM|CMAKE_HOST_SYSTEM_NAME|CMAKE_HOST_SYSTEM_PROCESSOR|CMAKE_HOST_SYSTEM_VERSION|CMAKE_HOST_UNIX|CMAKE_HOST_WIN32|CMAKE_IGNORE_PATH|CMAKE_IMPORT_LIBRARY_PREFIX|CMAKE_IMPORT_LIBRARY_SUFFIX|CMAKE_INCLUDE_CURRENT_DIR|CMAKE_INCLUDE_CURRENT_DIR_IN_INTERFACE|CMAKE_INCLUDE_DIRECTORIES_BEFORE|CMAKE_INCLUDE_DIRECTORIES_PROJECT_BEFORE|CMAKE_INCLUDE_PATH|CMAKE_INSTALL_DEFAULT_COMPONENT_NAME|CMAKE_INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|CMAKE_INSTALL_MESSAGE|CMAKE_INSTALL_NAME_DIR|CMAKE_INSTALL_PREFIX|CMAKE_INSTALL_PREFIX_INITIALIZED_TO_DEFAULT|CMAKE_INSTALL_RPATH|CMAKE_INSTALL_RPATH_USE_LINK_PATH|CMAKE_INTERNAL_PLATFORM_ABI|CMAKE_INTERPROCEDURAL_OPTIMIZATION|CMAKE_INTERPROCEDURAL_OPTIMIZATION_\w+|CMAKE_IOS_INSTALL_COMBINED|CMAKE_JOB_POOLS|CMAKE_JOB_POOL_COMPILE|CMAKE_JOB_POOL_LINK|CMAKE_LIBRARY_ARCHITECTURE|CMAKE_LIBRARY_ARCHITECTURE_REGEX|CMAKE_LIBRARY_OUTPUT_DIRECTORY|CMAKE_LIBRARY_OUTPUT_DIRECTORY_\w+|CMAKE_LIBRARY_PATH|CMAKE_LIBRARY_PATH_FLAG|CMAKE_LINK_DEF_FILE_FLAG|CMAKE_LINK_DEPENDS_NO_SHARED|CMAKE_LINK_DIRECTORIES_BEFORE|CMAKE_LINK_INTERFACE_LIBRARIES|CMAKE_LINK_LIBRARY_FILE_FLAG|CMAKE_LINK_LIBRARY_FLAG|CMAKE_LINK_LIBRARY_SUFFIX|CMAKE_LINK_SEARCH_END_STATIC|CMAKE_LINK_SEARCH_START_STATIC|CMAKE_LINK_WHAT_YOU_USE|CMAKE_MACOSX_BUNDLE|CMAKE_MACOSX_RPATH|CMAKE_MAJOR_VERSION|CMAKE_MAKE_PROGRAM|CMAKE_MAP_IMPORTED_CONFIG_\w+|CMAKE_MATCH_\w+|CMAKE_MATCH_COUNT|CMAKE_MAXIMUM_RECURSION_DEPTH|CMAKE_MFC_FLAG|CMAKE_MINIMUM_REQUIRED_VERSION|CMAKE_MINOR_VERSION|CMAKE_MODULE_LINKER_FLAGS|CMAKE_MODULE_LINKER_FLAGS_\w+|CMAKE_MODULE_LINKER_FLAGS_\w+_INIT|CMAKE_MODULE_LINKER_FLAGS_INIT|CMAKE_MODULE_PATH|CMAKE_MSVCIDE_RUN_PATH|CMAKE_NETRC|CMAKE_NETRC_FILE|CMAKE_NINJA_OUTPUT_PATH_PREFIX|CMAKE_NOT_USING_CONFIG_FLAGS|CMAKE_NO_BUILTIN_CHRPATH|CMAKE_NO_SYSTEM_FROM_IMPORTED|CMAKE_OBJECT_PATH_MAX|CMAKE_OSX_ARCHITECTURES|CMAKE_OSX_DEPLOYMENT_TARGET|CMAKE_OSX_SYSROOT|CMAKE_PARENT_LIST_FILE|CMAKE_PATCH_VERSION|CMAKE_PDB_OUTPUT_DIRECTORY|CMAKE_PDB_OUTPUT_DIRECTORY_\w+|CMAKE_POLICY_DEFAULT_CMP\w+|CMAKE_POLICY_WARNING_CMP\w+|CMAKE_POSITION_INDEPENDENT_CODE|CMAKE_PREFIX_PATH|CMAKE_PROGRAM_PATH|CMAKE_PROJECT_\w+_INCLUDE|CMAKE_PROJECT_DESCRIPTION|CMAKE_PROJECT_HOMEPAGE_URL|CMAKE_PROJECT_NAME|CMAKE_PROJECT_VERSION|CMAKE_PROJECT_VERSION_MAJOR|CMAKE_PROJECT_VERSION_MINOR|CMAKE_PROJECT_VERSION_PATCH|CMAKE_PROJECT_VERSION_TWEAK|CMAKE_RANLIB|CMAKE_ROOT|CMAKE_RULE_MESSAGES|CMAKE_RUNTIME_OUTPUT_DIRECTORY|CMAKE_RUNTIME_OUTPUT_DIRECTORY_\w+|CMAKE_SCRIPT_MODE_FILE|CMAKE_SHARED_LIBRARY_PREFIX|CMAKE_SHARED_LIBRARY_SUFFIX|CMAKE_SHARED_LINKER_FLAGS|CMAKE_SHARED_LINKER_FLAGS_\w+|CMAKE_SHARED_LINKER_FLAGS_\w+_INIT|CMAKE_SHARED_LINKER_FLAGS_INIT|CMAKE_SHARED_MODULE_PREFIX|CMAKE_SHARED_MODULE_SUFFIX|CMAKE_SIZEOF_VOID_P|CMAKE_SKIP_BUILD_RPATH|CMAKE_SKIP_INSTALL_ALL_DEPENDENCY|CMAKE_SKIP_INSTALL_RPATH|CMAKE_SKIP_INSTALL_RULES|CMAKE_SKIP_RPATH|CMAKE_SOURCE_DIR|CMAKE_STAGING_PREFIX|CMAKE_STATIC_LIBRARY_PREFIX|CMAKE_STATIC_LIBRARY_SUFFIX|CMAKE_STATIC_LINKER_FLAGS|CMAKE_STATIC_LINKER_FLAGS_\w+|CMAKE_STATIC_LINKER_FLAGS_\w+_INIT|CMAKE_STATIC_LINKER_FLAGS_INIT|CMAKE_SUBLIME_TEXT_2_ENV_SETTINGS|CMAKE_SUBLIME_TEXT_2_EXCLUDE_BUILD_TREE|CMAKE_SUPPRESS_REGENERATION|CMAKE_SYSROOT|CMAKE_SYSROOT_COMPILE|CMAKE_SYSROOT_LINK|CMAKE_SYSTEM|CMAKE_SYSTEM_APPBUNDLE_PATH|CMAKE_SYSTEM_FRAMEWORK_PATH|CMAKE_SYSTEM_IGNORE_PATH|CMAKE_SYSTEM_INCLUDE_PATH|CMAKE_SYSTEM_LIBRARY_PATH|CMAKE_SYSTEM_NAME|CMAKE_SYSTEM_PREFIX_PATH|CMAKE_SYSTEM_PROCESSOR|CMAKE_SYSTEM_PROGRAM_PATH|CMAKE_SYSTEM_VERSION|CMAKE_Swift_LANGUAGE_VERSION|CMAKE_TOOLCHAIN_FILE|CMAKE_TRY_COMPILE_CONFIGURATION|CMAKE_TRY_COMPILE_PLATFORM_VARIABLES|CMAKE_TRY_COMPILE_TARGET_TYPE|CMAKE_TWEAK_VERSION|CMAKE_USER_MAKE_RULES_OVERRIDE|CMAKE_USER_MAKE_RULES_OVERRIDE_\w+|CMAKE_USE_RELATIVE_PATHS|CMAKE_VERBOSE_MAKEFILE|CMAKE_VERSION|CMAKE_VISIBILITY_INLINES_HIDDEN|CMAKE_VS_DEVENV_COMMAND|CMAKE_VS_GLOBALS|CMAKE_VS_INCLUDE_INSTALL_TO_DEFAULT_BUILD|CMAKE_VS_INCLUDE_PACKAGE_TO_DEFAULT_BUILD|CMAKE_VS_INTEL_Fortran_PROJECT_VERSION|CMAKE_VS_MSBUILD_COMMAND|CMAKE_VS_NsightTegra_VERSION|CMAKE_VS_PLATFORM_NAME|CMAKE_VS_PLATFORM_TOOLSET|CMAKE_VS_PLATFORM_TOOLSET_CUDA|CMAKE_VS_PLATFORM_TOOLSET_HOST_ARCHITECTURE|CMAKE_VS_PLATFORM_TOOLSET_VERSION|CMAKE_VS_SDK_EXCLUDE_DIRECTORIES|CMAKE_VS_SDK_EXECUTABLE_DIRECTORIES|CMAKE_VS_SDK_INCLUDE_DIRECTORIES|CMAKE_VS_SDK_LIBRARY_DIRECTORIES|CMAKE_VS_SDK_LIBRARY_WINRT_DIRECTORIES|CMAKE_VS_SDK_REFERENCE_DIRECTORIES|CMAKE_VS_SDK_SOURCE_DIRECTORIES|CMAKE_VS_WINDOWS_TARGET_PLATFORM_VERSION|CMAKE_VS_WINRT_BY_DEFAULT|CMAKE_WARN_DEPRECATED|CMAKE_WARN_ON_ABSOLUTE_INSTALL_DESTINATION|CMAKE_WIN32_EXECUTABLE|CMAKE_WINDOWS_EXPORT_ALL_SYMBOLS|CMAKE_XCODE_ATTRIBUTE_\w+|CMAKE_XCODE_GENERATE_SCHEME|CMAKE_XCODE_GENERATE_TOP_LEVEL_PROJECT_ONLY|CMAKE_XCODE_PLATFORM_TOOLSET|CMAKE_XCODE_SCHEME_ADDRESS_SANITIZER|CMAKE_XCODE_SCHEME_ADDRESS_SANITIZER_USE_AFTER_RETURN|CMAKE_XCODE_SCHEME_DISABLE_MAIN_THREAD_CHECKER|CMAKE_XCODE_SCHEME_DYNAMIC_LIBRARY_LOADS|CMAKE_XCODE_SCHEME_DYNAMIC_LINKER_API_USAGE|CMAKE_XCODE_SCHEME_GUARD_MALLOC|CMAKE_XCODE_SCHEME_MAIN_THREAD_CHECKER_STOP|CMAKE_XCODE_SCHEME_MALLOC_GUARD_EDGES|CMAKE_XCODE_SCHEME_MALLOC_SCRIBBLE|CMAKE_XCODE_SCHEME_MALLOC_STACK|CMAKE_XCODE_SCHEME_THREAD_SANITIZER|CMAKE_XCODE_SCHEME_THREAD_SANITIZER_STOP|CMAKE_XCODE_SCHEME_UNDEFINED_BEHAVIOUR_SANITIZER|CMAKE_XCODE_SCHEME_UNDEFINED_BEHAVIOUR_SANITIZER_STOP|CMAKE_XCODE_SCHEME_ZOMBIE_OBJECTS|CPACK_ABSOLUTE_DESTINATION_FILES|CPACK_COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|CPACK_ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|CPACK_INCLUDE_TOPLEVEL_DIRECTORY|CPACK_INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|CPACK_INSTALL_SCRIPT|CPACK_PACKAGING_INSTALL_PREFIX|CPACK_SET_DESTDIR|CPACK_WARN_ON_ABSOLUTE_INSTALL_DESTINATION|CTEST_BINARY_DIRECTORY|CTEST_BUILD_COMMAND|CTEST_BUILD_NAME|CTEST_BZR_COMMAND|CTEST_BZR_UPDATE_OPTIONS|CTEST_CHANGE_ID|CTEST_CHECKOUT_COMMAND|CTEST_CONFIGURATION_TYPE|CTEST_CONFIGURE_COMMAND|CTEST_COVERAGE_COMMAND|CTEST_COVERAGE_EXTRA_FLAGS|CTEST_CURL_OPTIONS|CTEST_CUSTOM_COVERAGE_EXCLUDE|CTEST_CUSTOM_ERROR_EXCEPTION|CTEST_CUSTOM_ERROR_MATCH|CTEST_CUSTOM_ERROR_POST_CONTEXT|CTEST_CUSTOM_ERROR_PRE_CONTEXT|CTEST_CUSTOM_MAXIMUM_FAILED_TEST_OUTPUT_SIZE|CTEST_CUSTOM_MAXIMUM_NUMBER_OF_ERRORS|CTEST_CUSTOM_MAXIMUM_NUMBER_OF_WARNINGS|CTEST_CUSTOM_MAXIMUM_PASSED_TEST_OUTPUT_SIZE|CTEST_CUSTOM_MEMCHECK_IGNORE|CTEST_CUSTOM_POST_MEMCHECK|CTEST_CUSTOM_POST_TEST|CTEST_CUSTOM_PRE_MEMCHECK|CTEST_CUSTOM_PRE_TEST|CTEST_CUSTOM_TESTS_IGNORE|CTEST_CUSTOM_WARNING_EXCEPTION|CTEST_CUSTOM_WARNING_MATCH|CTEST_CVS_CHECKOUT|CTEST_CVS_COMMAND|CTEST_CVS_UPDATE_OPTIONS|CTEST_DROP_LOCATION|CTEST_DROP_METHOD|CTEST_DROP_SITE|CTEST_DROP_SITE_CDASH|CTEST_DROP_SITE_PASSWORD|CTEST_DROP_SITE_USER|CTEST_EXTRA_COVERAGE_GLOB|CTEST_GIT_COMMAND|CTEST_GIT_INIT_SUBMODULES|CTEST_GIT_UPDATE_CUSTOM|CTEST_GIT_UPDATE_OPTIONS|CTEST_HG_COMMAND|CTEST_HG_UPDATE_OPTIONS|CTEST_LABELS_FOR_SUBPROJECTS|CTEST_MEMORYCHECK_COMMAND|CTEST_MEMORYCHECK_COMMAND_OPTIONS|CTEST_MEMORYCHECK_SANITIZER_OPTIONS|CTEST_MEMORYCHECK_SUPPRESSIONS_FILE|CTEST_MEMORYCHECK_TYPE|CTEST_NIGHTLY_START_TIME|CTEST_P4_CLIENT|CTEST_P4_COMMAND|CTEST_P4_OPTIONS|CTEST_P4_UPDATE_OPTIONS|CTEST_RUN_CURRENT_SCRIPT|CTEST_SCP_COMMAND|CTEST_SITE|CTEST_SOURCE_DIRECTORY|CTEST_SUBMIT_URL|CTEST_SVN_COMMAND|CTEST_SVN_OPTIONS|CTEST_SVN_UPDATE_OPTIONS|CTEST_TEST_LOAD|CTEST_TEST_TIMEOUT|CTEST_TRIGGER_SITE|CTEST_UPDATE_COMMAND|CTEST_UPDATE_OPTIONS|CTEST_UPDATE_VERSION_ONLY|CTEST_USE_LAUNCHERS|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC|MSVC10|MSVC11|MSVC12|MSVC14|MSVC60|MSVC70|MSVC71|MSVC80|MSVC90|MSVC_IDE|MSVC_TOOLSET_VERSION|MSVC_VERSION|MSYS|PROJECT_BINARY_DIR|PROJECT_DESCRIPTION|PROJECT_HOMEPAGE_URL|PROJECT_NAME|PROJECT_SOURCE_DIR|PROJECT_VERSION|PROJECT_VERSION_MAJOR|PROJECT_VERSION_MINOR|PROJECT_VERSION_PATCH|PROJECT_VERSION_TWEAK|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE|XCODE_VERSION)\b/,
    'keyword': /\b(add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)\b/,
    'property': /\b(\w+_OUTPUT_NAME|\w+_POSTFIX|\w+_CLANG_TIDY|\w+_COMPILER_LAUNCHER|\w+_CPPCHECK|\w+_CPPLINT|\w+_INCLUDE_WHAT_YOU_USE|\w+_VISIBILITY_PRESET|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_ANT_ADDITIONAL_OPTIONS|ANDROID_API|ANDROID_API_MIN|ANDROID_ARCH|ANDROID_ASSETS_DIRECTORIES|ANDROID_GUI|ANDROID_JAR_DEPENDENCIES|ANDROID_NATIVE_LIB_DEPENDENCIES|ANDROID_NATIVE_LIB_DIRECTORIES|ANDROID_PROCESS_MAX|ANDROID_PROGUARD|ANDROID_PROGUARD_CONFIG_PATH|ANDROID_SECURE_PROPS_PATH|ANDROID_SKIP_ANT_STEP|ANDROID_STL_TYPE|ARCHIVE_OUTPUT_DIRECTORY|ARCHIVE_OUTPUT_DIRECTORY_\w+|ARCHIVE_OUTPUT_NAME|ARCHIVE_OUTPUT_NAME_\w+|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_BUILD_DIR|AUTOGEN_ORIGIN_DEPENDS|AUTOGEN_PARALLEL|AUTOGEN_SOURCE_GROUP|AUTOGEN_TARGETS_FOLDER|AUTOGEN_TARGET_DEPENDS|AUTOMOC|AUTOMOC_COMPILER_PREDEFINES|AUTOMOC_DEPEND_FILTERS|AUTOMOC_EXECUTABLE|AUTOMOC_MACRO_NAMES|AUTOMOC_MOC_OPTIONS|AUTOMOC_SOURCE_GROUP|AUTOMOC_TARGETS_FOLDER|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_BOOL|COMPATIBLE_INTERFACE_NUMBER_MAX|COMPATIBLE_INTERFACE_NUMBER_MIN|COMPATIBLE_INTERFACE_STRING|COMPILE_DEFINITIONS|COMPILE_DEFINITIONS|COMPILE_DEFINITIONS|COMPILE_DEFINITIONS_\w+|COMPILE_DEFINITIONS_\w+|COMPILE_DEFINITIONS_\w+|COMPILE_FEATURES|COMPILE_FLAGS|COMPILE_FLAGS|COMPILE_OPTIONS|COMPILE_OPTIONS|COMPILE_OPTIONS|COMPILE_PDB_NAME|COMPILE_PDB_NAME_\w+|COMPILE_PDB_OUTPUT_DIRECTORY|COMPILE_PDB_OUTPUT_DIRECTORY_\w+|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEBUG_POSTFIX|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXCLUDE_FROM_DEFAULT_BUILD_\w+|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_COMMON_LANGUAGE_RUNTIME|IMPORTED_CONFIGURATIONS|IMPORTED_GLOBAL|IMPORTED_IMPLIB|IMPORTED_IMPLIB_\w+|IMPORTED_LIBNAME|IMPORTED_LIBNAME_\w+|IMPORTED_LINK_DEPENDENT_LIBRARIES|IMPORTED_LINK_DEPENDENT_LIBRARIES_\w+|IMPORTED_LINK_INTERFACE_LANGUAGES|IMPORTED_LINK_INTERFACE_LANGUAGES_\w+|IMPORTED_LINK_INTERFACE_LIBRARIES|IMPORTED_LINK_INTERFACE_LIBRARIES_\w+|IMPORTED_LINK_INTERFACE_MULTIPLICITY|IMPORTED_LINK_INTERFACE_MULTIPLICITY_\w+|IMPORTED_LOCATION|IMPORTED_LOCATION_\w+|IMPORTED_NO_SONAME|IMPORTED_NO_SONAME_\w+|IMPORTED_OBJECTS|IMPORTED_OBJECTS_\w+|IMPORTED_SONAME|IMPORTED_SONAME_\w+|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_DIRECTORIES|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_AUTOUIC_OPTIONS|INTERFACE_COMPILE_DEFINITIONS|INTERFACE_COMPILE_FEATURES|INTERFACE_COMPILE_OPTIONS|INTERFACE_INCLUDE_DIRECTORIES|INTERFACE_LINK_DEPENDS|INTERFACE_LINK_DIRECTORIES|INTERFACE_LINK_LIBRARIES|INTERFACE_LINK_OPTIONS|INTERFACE_POSITION_INDEPENDENT_CODE|INTERFACE_SOURCES|INTERFACE_SYSTEM_INCLUDE_DIRECTORIES|INTERPROCEDURAL_OPTIMIZATION|INTERPROCEDURAL_OPTIMIZATION|INTERPROCEDURAL_OPTIMIZATION_\w+|INTERPROCEDURAL_OPTIMIZATION_\w+|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LABELS|LABELS|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_DIRECTORY_\w+|LIBRARY_OUTPUT_NAME|LIBRARY_OUTPUT_NAME_\w+|LINKER_LANGUAGE|LINK_DEPENDS|LINK_DEPENDS_NO_SHARED|LINK_DIRECTORIES|LINK_DIRECTORIES|LINK_FLAGS|LINK_FLAGS_\w+|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_LIBRARIES_\w+|LINK_INTERFACE_MULTIPLICITY|LINK_INTERFACE_MULTIPLICITY_\w+|LINK_LIBRARIES|LINK_OPTIONS|LINK_OPTIONS|LINK_SEARCH_END_STATIC|LINK_SEARCH_START_STATIC|LINK_WHAT_YOU_USE|LISTFILE_STACK|LOCATION|LOCATION|LOCATION_\w+|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MAP_IMPORTED_CONFIG_\w+|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OSX_ARCHITECTURES_\w+|OUTPUT_NAME|OUTPUT_NAME_\w+|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_NAME_\w+|PDB_OUTPUT_DIRECTORY|PDB_OUTPUT_DIRECTORY_\w+|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_COMPILE|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_LAUNCH_LINK|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY_\w+|RUNTIME_OUTPUT_NAME|RUNTIME_OUTPUT_NAME_\w+|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_FLAGS_\w+|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_CONFIGURATION_TYPE|VS_COPY_TO_OUT_DIR|VS_CSHARP_\w+|VS_DEBUGGER_COMMAND|VS_DEBUGGER_COMMAND_ARGUMENTS|VS_DEBUGGER_ENVIRONMENT|VS_DEBUGGER_WORKING_DIRECTORY|VS_DEPLOYMENT_CONTENT|VS_DEPLOYMENT_LOCATION|VS_DOTNET_REFERENCEPROP_\w+|VS_DOTNET_REFERENCES|VS_DOTNET_REFERENCES_COPY_LOCAL|VS_DOTNET_REFERENCE_\w+|VS_GLOBAL_\w+|VS_GLOBAL_KEYWORD|VS_GLOBAL_PROJECT_TYPES|VS_GLOBAL_ROOTNAMESPACE|VS_GLOBAL_SECTION_POST_\w+|VS_GLOBAL_SECTION_PRE_\w+|VS_INCLUDE_IN_VSIX|VS_IOT_STARTUP_TASK|VS_KEYWORD|VS_RESOURCE_GENERATOR|VS_SCC_AUXPATH|VS_SCC_LOCALPATH|VS_SCC_PROJECTNAME|VS_SCC_PROVIDER|VS_SDK_REFERENCES|VS_SHADER_DISABLE_OPTIMIZATIONS|VS_SHADER_ENABLE_DEBUG|VS_SHADER_ENTRYPOINT|VS_SHADER_FLAGS|VS_SHADER_MODEL|VS_SHADER_OBJECT_FILE_NAME|VS_SHADER_OUTPUT_HEADER_FILE|VS_SHADER_TYPE|VS_SHADER_VARIABLE_NAME|VS_STARTUP_PROJECT|VS_TOOL_OVERRIDE|VS_USER_PROPS|VS_WINRT_COMPONENT|VS_WINRT_EXTENSIONS|VS_WINRT_REFERENCES|VS_XAML_TYPE|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_ATTRIBUTE_\w+|XCODE_EMIT_EFFECTIVE_PLATFORM_NAME|XCODE_EXPLICIT_FILE_TYPE|XCODE_EXPLICIT_FILE_TYPE|XCODE_FILE_ATTRIBUTES|XCODE_LAST_KNOWN_FILE_TYPE|XCODE_PRODUCT_TYPE|XCODE_SCHEME_ADDRESS_SANITIZER|XCODE_SCHEME_ADDRESS_SANITIZER_USE_AFTER_RETURN|XCODE_SCHEME_ARGUMENTS|XCODE_SCHEME_DISABLE_MAIN_THREAD_CHECKER|XCODE_SCHEME_DYNAMIC_LIBRARY_LOADS|XCODE_SCHEME_DYNAMIC_LINKER_API_USAGE|XCODE_SCHEME_ENVIRONMENT|XCODE_SCHEME_EXECUTABLE|XCODE_SCHEME_GUARD_MALLOC|XCODE_SCHEME_MAIN_THREAD_CHECKER_STOP|XCODE_SCHEME_MALLOC_GUARD_EDGES|XCODE_SCHEME_MALLOC_SCRIBBLE|XCODE_SCHEME_MALLOC_STACK|XCODE_SCHEME_THREAD_SANITIZER|XCODE_SCHEME_THREAD_SANITIZER_STOP|XCODE_SCHEME_UNDEFINED_BEHAVIOUR_SANITIZER|XCODE_SCHEME_UNDEFINED_BEHAVIOUR_SANITIZER_STOP|XCODE_SCHEME_ZOMBIE_OBJECTS|XCTEST)\b/,
    'boolean': /\b(ON|OFF|TRUE|FALSE)\b/,
    'namespace': /\b(PROPERTIES|SHARED|PRIVATE|STATIC|PUBLIC|INTERFACE|TARGET_OBJECTS)\b/,
    'operator': /\b(NOT|AND|OR|MATCHES|LESS|GREATER|EQUAL|STRLESS|STRGREATER|STREQUAL|VERSION_LESS|VERSION_EQUAL|VERSION_GREATER|DEFINED)\b/,
};