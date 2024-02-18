# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := greet
DEFS_Debug := \
	'-DNODE_GYP_MODULE_NAME=greet' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-DELECTRON_ENSURE_CONFIG_GYPI' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DUSING_ELECTRON_CONFIG_GYPI' \
	'-DV8_COMPRESS_POINTERS' \
	'-DV8_COMPRESS_POINTERS_IN_SHARED_CAGE' \
	'-DV8_ENABLE_SANDBOX' \
	'-DV8_SANDBOXED_POINTERS' \
	'-DV8_31BIT_SMIS_ON_64BIT_ARCH' \
	'-DV8_REVERSE_JSARGS' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DOPENSSL_NO_ASM' \
	'-DNAPI_DISABLE_CPP_EXCEPTIONS' \
	'-DBUILDING_NODE_EXTENSION' \
	'-DDEBUG' \
	'-D_DEBUG' \
	'-DV8_ENABLE_CHECKS'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-std=gnu++14 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/include/node \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/src \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/openssl/config \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/openssl/openssl/include \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/uv/include \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/zlib \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/v8/include \
	-I/Users/maoyouwen/study/node/helloworldnapi/node_modules/node-addon-api

DEFS_Release := \
	'-DNODE_GYP_MODULE_NAME=greet' \
	'-DUSING_UV_SHARED=1' \
	'-DUSING_V8_SHARED=1' \
	'-DV8_DEPRECATION_WARNINGS=1' \
	'-DV8_DEPRECATION_WARNINGS' \
	'-DV8_IMMINENT_DEPRECATION_WARNINGS' \
	'-D_GLIBCXX_USE_CXX11_ABI=1' \
	'-DELECTRON_ENSURE_CONFIG_GYPI' \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DUSING_ELECTRON_CONFIG_GYPI' \
	'-DV8_COMPRESS_POINTERS' \
	'-DV8_COMPRESS_POINTERS_IN_SHARED_CAGE' \
	'-DV8_ENABLE_SANDBOX' \
	'-DV8_SANDBOXED_POINTERS' \
	'-DV8_31BIT_SMIS_ON_64BIT_ARCH' \
	'-DV8_REVERSE_JSARGS' \
	'-DOPENSSL_NO_PINSHARED' \
	'-DOPENSSL_THREADS' \
	'-DOPENSSL_NO_ASM' \
	'-DNAPI_DISABLE_CPP_EXCEPTIONS' \
	'-DBUILDING_NODE_EXTENSION'

# Flags passed to all source files.
CFLAGS_Release := \
	-O3 \
	-gdwarf-2 \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-std=gnu++14 \
	-stdlib=libc++ \
	-fno-rtti \
	-fno-exceptions \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/include/node \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/src \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/openssl/config \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/openssl/openssl/include \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/uv/include \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/zlib \
	-I/Users/maoyouwen/.electron-gyp/Library/Caches/node-gyp/20.0.2/deps/v8/include \
	-I/Users/maoyouwen/study/node/helloworldnapi/node_modules/node-addon-api

OBJS := \
	$(obj).target/$(TARGET)/src/greeting.o \
	$(obj).target/$(TARGET)/src/index.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.cpp FORCE_DO_CMD
	@$(call do_cmd,cxx,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.13 \
	-arch arm64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-search_paths_first

LIBS :=

$(builddir)/greet.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/greet.node: LIBS := $(LIBS)
$(builddir)/greet.node: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/greet.node: TOOLSET := $(TOOLSET)
$(builddir)/greet.node: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(builddir)/greet.node
# Add target alias
.PHONY: greet
greet: $(builddir)/greet.node

# Short alias for building this executable.
.PHONY: greet.node
greet.node: $(builddir)/greet.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/greet.node

